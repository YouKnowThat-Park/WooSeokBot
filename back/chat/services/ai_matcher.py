from openai import OpenAI
from django.conf import settings
from .conversation import get_recent_conversation, get_last_user_question
from .description_service import get_description_by_title
from .prompt_loader import load_prompt
from chat.utils import slug_to_base, format_list_for_prompt
from openai import OpenAIError


def extract_matching_project_by_slug(slug: str, slug_projects: list[dict]) -> dict | None:
    slug = slug.strip().lower()
    for item in slug_projects:
        s = item.get("slug", "").lower()
        if s == slug or slug_to_base(s) == slug_to_base(slug):
            return item
    return None


def match_best_profile_title(user_query: str, data: dict) -> str:
    q = user_query.lower()

    # 슬러그(project) 이름이 명시된 경우 먼저 매칭
    for item in data.get("slug_projects", []):
        slug = item.get("slug", "").lower()
        if slug and (slug in q or slug_to_base(slug) in q):
            print("[DEBUG] 슬러그 직접 매칭됨:", slug, "→", item["title"])
            return item["title"]

    #  기본 타이틀 설정 (무조건 박우석 정보부터)
    profile_titles = [i["title"] for i in data.get("profiles", [])]
    titles = ["박우석 정보"] + [i["title"] for i in data.get("profiles", [])] + [i["title"] for i in data.get("slug_projects", [])]
    print("[DEBUG] GPT 타이틀 후보 목록:", titles)

    formatted = format_list_for_prompt(titles)
    print("[DEBUG] format_list_for_prompt 결과:\n", formatted)

    # 프롬프트 불러와서 GPT에게 매칭 요청
    system = load_prompt("system_match_slug.txt").format(
        title_list=formatted
    )
    print("[DEBUG] system prompt 내용:\n", system)

    resp = OpenAI(api_key=settings.OPENAI_API_KEY).chat.completions.create(
        model="gpt-4.1-nano",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user_query}
        ],
        temperature=0,
        max_tokens=50
    )

    result = resp.choices[0].message.content.strip()
    print("[DEBUG] GPT 응답 결과:", repr(result))

    return result


def is_requesting_last_question(user_query: str) -> bool:
    system = load_prompt("system_is_requesting_last.txt")
    resp = OpenAI(api_key=settings.OPENAI_API_KEY).chat.completions.create(
        model="gpt-4.1-nano",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user_query}
        ],
        temperature=0,
        max_tokens=2
    )
    result = resp.choices[0].message.content.strip().upper()
    print(f"[DEBUG] Query: {user_query} → Response: {result}")  # 혹은 logger 사용
    return result == "YES"

def generate_ai_answer(user_query: str, data: dict, token: str, slug: str | None = None) -> str:
    try:
        if is_requesting_last_question(user_query):
            return get_last_user_question(token)

        slug_projects = data.get("slug_projects", [])
        matched_project = extract_matching_project_by_slug(slug or "", slug_projects) if slug else None

        if matched_project:
            selected_title = matched_project["title"]
            selected_desc = matched_project.get("description", "").strip() or "내용 없음"
        else:
            selected_title = match_best_profile_title(user_query, data)
            selected_desc = get_description_by_title(data, selected_title) or "내용 없음"

        system = load_prompt("system_portfolio_chat.txt").format(
            selected_title=selected_title,
            selected_description=selected_desc
            
        )

        resp = OpenAI(api_key=settings.OPENAI_API_KEY).chat.completions.create(
            model="gpt-4.1-nano",
            messages=[
                {"role": "system", "content": system},
                *get_recent_conversation(token),
                {"role": "user", "content": user_query}
            ],
            temperature=0.0,
            max_tokens=1000,
            top_p=0.9
        )

        return resp.choices[0].message.content.strip()

    except OpenAIError as e:
        raise RuntimeError("AI 응답 생성 중 문제가 발생했습니다.") from e

    except Exception as e:
        raise RuntimeError("알 수 없는 에러가 발생했습니다.") from e