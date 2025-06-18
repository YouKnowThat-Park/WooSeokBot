from openai import OpenAI
from django.conf import settings
from chat.models import ChatSession

def format_profile_titles(data: dict) -> list[str]:
    """
    Chat Profile에서 title 리스트만 추출
    """
    return [item.get("title", "").strip() for item in data.get("profiles", []) if item.get("title")]


def get_recent_conversation(token: str, limit: int = 5) -> list[dict]:
    """
    최근 대화 기록을 최신순으로 가져오되, 순서는 다시 올바르게 정렬
    """
    chats = ChatSession.objects.filter(token=token).order_by('-created_at')[:limit]
    chats = list(reversed(chats))  # 역순 복원 (가장 오래된→가장 최신)
    messages = []
    for chat in chats:
        messages.append({"role": "user", "content": chat.query})
        messages.append({"role": "assistant", "content": chat.response})
    return messages


def match_best_profile_title(user_query: str, profile_titles: list[str]) -> str:
    """
    GPT가 사용자 질문에 가장 의미적으로 가까운 Chat Profile의 title을 하나 선택
    """
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    title_list_str = "\n".join([f"- {t}" for t in profile_titles])
    system = (
        "당신은 박우석 지원자의 인터랙티브 포트폴리오 시스템입니다.\n"
        "아래는 지원자의 포트폴리오 항목 제목들입니다.\n\n"
        f"{title_list_str}\n\n"
        "사용자의 질문에 가장 의미적으로 유사한 제목 하나를 선택하세요.\n"
        "❗ 정확히 그 제목만 한 줄로 출력합니다."
    )
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "system", "content": system},
                  {"role": "user", "content": user_query}],
        temperature=0,
        max_tokens=50,
    )
    return resp.choices[0].message.content.strip()


def get_description_by_title(data: dict, selected_title: str) -> str:
    """
    title에 해당하는 description을 가져옴
    """
    for item in data.get("profiles", []):
        if item.get("title", "").strip() == selected_title:
            return item.get("description", "").strip()
    return ""


def is_requesting_last_question(user_query: str) -> bool:
    """
    사용자의 질의가 '이전 질문을 알려달라'는 의미인지 YES/NO 분류
    """
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    system = (
        "사용자의 입력이 “방금 전에 했던 질문을 알려달라”는 의미인지 "
        "오직 YES 아니면 NO로만 답하세요.\n"
        "YES: 이전 질문 요청\n"
        "NO: 그 외"
    )
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user_query},
        ],
        temperature=0,
        max_tokens=2,
    )
    return resp.choices[0].message.content.strip().upper() == "YES"


def get_last_user_question(token: str) -> str:
    """
    DB에서 가장 최근 사용자 질문(assistant 응답 직전의 user query)만 꺼내 반환
    """
    recent = ChatSession.objects.filter(token=token).order_by('-created_at')[:2]
    if len(recent) < 2:
        return "아직 이전에 하신 질문이 없습니다."
    # recent[0]: 가장 최근 대화(assistant), recent[1]: 그 전 user 질문
    last_user = recent[0].query
    return f"직전에 하신 질문은 다음과 같습니다:\n\n“{last_user}”"


def generate_ai_answer(user_query: str, data: dict, token: str) -> str:
    # 1) “이전 질문 요청”인지 분류
    if is_requesting_last_question(user_query):
        return get_last_user_question(token)

    # 2) 일반 포트폴리오 기반 답변 흐름
    previous_messages = get_recent_conversation(token)
    profile_titles = format_profile_titles(data)
    selected_title = match_best_profile_title(user_query, profile_titles)
    selected_description = get_description_by_title(data, selected_title)

    system_content = (
        "당신은 박우석 지원자의 인터랙티브 포트폴리오 챗봇입니다.\n"
        "면접관과의 질의응답을 통해 포트폴리오 기반 답변을 생성해야 합니다.\n\n"
        f"[포트폴리오 항목 제목]: {selected_title}\n"
        f"[포트폴리오 내용]:\n{selected_description or '내용 없음'}"
    )

    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_content},
            *previous_messages,
            {"role": "user", "content": user_query},
        ],
        temperature=0.25,
        max_tokens=1000,
        top_p=0.9,
    )
    return resp.choices[0].message.content.strip()
