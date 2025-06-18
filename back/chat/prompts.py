from openai import OpenAI
from django.conf import settings
from chat.models import ChatSession

def get_recent_conversation(token: str, limit: int = 5) -> list[dict]:
    """
    최근 대화 기록을 가져와, 가장 오래된→가장 최신 순으로 리턴
    """
    chats = ChatSession.objects.filter(token=token).order_by('-created_at')[:limit]
    chats = list(reversed(chats))
    messages = []
    for chat in chats:
        messages.append({"role": "user",      "content": chat.query})
        messages.append({"role": "assistant", "content": chat.response})
    return messages

def match_best_profile_title(user_query: str, data: dict) -> str:
    """
    1) user_query에 slug_projects.slug가 포함돼 있으면 해당 title 반환
    1-1) slug에서 숫자를 뺀 base가 포함돼 있어도 반환
    2) 아니면 profiles+slug_projects.title을 GPT에 보내 의미 매칭
    """
    q = user_query.lower()

    # 1) 슬러그 전체 및 슬러그 베이스 매칭
    for item in data.get("slug_projects", []):
        slug = item.get("slug", "").lower()
        if slug and slug in q:
            return item["title"]

        # 숫자를 뺀 slug_base 체크
        slug_base = "".join(c for c in slug if not c.isdigit())
        if slug_base and slug_base in q:
            return item["title"]

    # 2) 의미 매칭 (GPT)
    titles = [i["title"] for i in data.get("profiles", [])] + \
             [i["title"] for i in data.get("slug_projects", [])]
    title_list_str = "\n".join(f"- {t}" for t in titles)

    system = (
        "당신은 박우석 지원자의 인터랙티브 포트폴리오 시스템입니다.\n"
        "아래는 지원자의 포트폴리오 항목 및 프로젝트 제목들입니다.\n\n"
        f"{title_list_str}\n\n"
        "사용자의 질문에 의미적으로 가장 유사한 제목 하나를, 정확히 **한 줄**로만 출력하세요."
    )
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user",   "content": user_query},
        ],
        temperature=0,
        max_tokens=50,
    )
    return resp.choices[0].message.content.strip()

def get_description_by_title(data: dict, selected_title: str) -> str:
    """
    profiles 먼저, 없으면 slug_projects에서 선택된 title의 description 반환
    """
    for item in data.get("profiles", []):
        if item.get("title","").strip() == selected_title:
            return item.get("description","").strip() or ""
    for item in data.get("slug_projects", []):
        if item.get("title","").strip() == selected_title:
            return item.get("description","").strip() or ""
    return ""

def is_requesting_last_question(user_query: str) -> bool:
    """
    사용자가 ‘방금 전에 했던 질문을 알려달라’는 의도인지 YES/NO 분류
    """
    system = (
        "사용자 입력이 “방금 전에 했던 질문을 알려달라”는 의미인지, "
        "오직 YES 또는 NO로만 답하세요.\n"
        "YES: 이전 질문 요청\n"
        "NO: 그 외"
    )
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user",   "content": user_query},
        ],
        temperature=0,
        max_tokens=2,
    )
    return resp.choices[0].message.content.strip().upper() == "YES"

def get_last_user_question(token: str) -> str:
    """
    DB에서 가장 최근 user query 한 건만 꺼내 돌려줌
    """
    recent = ChatSession.objects.filter(token=token).order_by('-created_at')[:1]
    if not recent:
        return "아직 이전에 하신 질문이 없습니다."
    return f"직전에 하신 질문은 다음과 같습니다:\n\n“{recent[0].query}”"

def generate_ai_answer(user_query: str, data: dict, token: str) -> str:
    # 1) 직전 질문 요청 분기
    if is_requesting_last_question(user_query):
        return get_last_user_question(token)

    # 2) 일반 포트폴리오·프로젝트 답변 흐름
    previous_messages    = get_recent_conversation(token)
    selected_title       = match_best_profile_title(user_query, data)
    selected_description = get_description_by_title(data, selected_title)

    system_content = (
        "당신은 박우석 지원자의 인터랙티브 챗봇입니다.\n"
        "포트폴리오 또는 프로젝트 내용을 바탕으로 **즉시 답변만** 생성하세요.\n"
        "- 어떠한 유도 멘트(‘더 궁금하신가요?’ 등)는 절대 추가하지 않습니다.\n\n"
        f"[선택된 항목 제목]: {selected_title}\n"
        f"[선택된 항목 내용]:\n{selected_description or '내용 없음'}"
    )
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system",    "content": system_content},
            *previous_messages,
            {"role": "user",      "content": user_query},
        ],
        temperature=0.25,
        max_tokens=1000,
        top_p=0.9,
    )
    return resp.choices[0].message.content.strip()
