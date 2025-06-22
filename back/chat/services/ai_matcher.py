from openai import OpenAI
from django.conf import settings
from .conversation import get_recent_conversation, get_last_user_question
from .description_service import get_description_by_title
from .prompt_loader import load_prompt
from chat.utils import slug_to_base, format_list_for_prompt


def extract_matching_project_by_slug(slug: str, slug_projects: list[dict]) -> dict | None:
    slug = slug.strip().lower()
    for item in slug_projects:
        s = item.get("slug", "").lower()
        if s == slug or slug_to_base(s) == slug_to_base(slug):
            return item
    return None


def match_best_profile_title(user_query: str, data: dict) -> str:
    q = user_query.lower()
    for item in data.get("slug_projects", []):
        slug = item.get("slug", "").lower()
        if slug and (slug in q or slug_to_base(slug) in q):
            return item["title"]

    default = next(
        (i["title"] for i in data.get("slug_projects", [])
         if i.get("slug", "").lower() == "wooseokbot"),
        None
    )
    if default:
        return default

    titles = [i["title"] for i in data.get("profiles", [])] + \
             [i["title"] for i in data.get("slug_projects", [])]
    system = load_prompt("system_match_slug.txt").format(
        title_list=format_list_for_prompt(titles)
    )
    resp = OpenAI(api_key=settings.OPENAI_API_KEY).chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user_query}
        ],
        temperature=0,
        max_tokens=50
    )
    return resp.choices[0].message.content.strip()


def is_requesting_last_question(user_query: str) -> bool:
    system = load_prompt("system_is_requesting_last.txt")
    resp = OpenAI(api_key=settings.OPENAI_API_KEY).chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user_query}
        ],
        temperature=0,
        max_tokens=2
    )
    return resp.choices[0].message.content.strip().upper() == "YES"


def generate_ai_answer(user_query: str, data: dict, token: str, slug: str | None = None) -> str:

    if is_requesting_last_question(user_query):
        return get_last_user_question(token)

    slug_projects = data.get("slug_projects", [])

    # 🎯 slug가 직접 전달된 경우 → 해당 프로젝트에 고정
    matched_project = extract_matching_project_by_slug(slug or "", slug_projects) if slug else None

    if matched_project:
        selected_title = matched_project["title"]
        selected_desc = matched_project.get("description", "").strip() or "내용 없음"
        system = load_prompt("system_portfolio_chat.txt").format(
            selected_title=selected_title,
            selected_description=selected_desc
        )
    else:
        # 🌐 일반 질문 처리 fallback
        selected_title = match_best_profile_title(user_query, data)
        selected_desc = get_description_by_title(data, selected_title) or "내용 없음"
        system = load_prompt("system_portfolio_chat.txt").format(
            selected_title=selected_title,
            selected_description=selected_desc
        )

    resp = OpenAI(api_key=settings.OPENAI_API_KEY).chat.completions.create(
        model="gpt-4o-mini",
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
