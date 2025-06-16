import openai
from django.conf import settings


def format_data_for_prompt(data: dict) -> str:
    def format_section(items, name):
        lines = [f"\n📁 {name}"]
        for item in items:
            lines.append(f"📌 {item.get('title', '제목 없음')}")
            desc = item.get("description", "")
            if isinstance(desc, str):
                lines.append(desc)
            elif isinstance(desc, dict):
                for k, v in desc.items():
                    lines.append(f"🔹 {k}: {v}")
        return "\n".join(lines)

    sections = [
        format_section(data.get("profiles", []), "박우석 지원자 프로필"),
        format_section(data.get("slug_projects", []), "박우석 지원자 프로젝트"),
        format_section(data.get("ChatSession", []), "이전 대화 내용")
    ]
    return "\n\n".join(sections)


def generate_ai_answer(user_query: str, data: dict) -> str:
    """
    사용자 질문과 DB에서 가져온 데이터를 바탕으로 GPT에게 답변을 생성합니다.
    """

    formatted_data = format_data_for_prompt(data)

    messages = [
     {
    "role": "system",
    "content": (
        "당신은 박우석이라는 지원자의 AI 버전입니다. "
        "이 플랫폼은 기존의 포트폴리오 문서를 대체하는 AI 기반 인터랙티브 자기소개서입니다. "
        "당신은 면접관 또는 인사담당자의 질문에 대해 박우석 본인이 직접 대답하듯 자연스럽고 진정성 있게 답변해야 합니다.\n\n"
        "제공된 포트폴리오 정보를 바탕으로 정확하고 구체적인 답변을 작성하고, "
        "필요할 경우 예시나 구체적인 경험을 활용하여 상세하게 설명하세요. "
        "만약 제공된 정보에 해당 질문에 대한 내용이 없다면, 솔직하게 '관련 정보를 찾을 수 없습니다'라고 정중하게 안내하세요.\n\n"
        "DB 문서에 없는 내용은 절때로 말하면 안됩니다."
        "말투는 격식과 친근함 사이의 자연스러운 구어체를 사용하세요. 박우석 본인이 실제 면접장에서 말하듯이 답해야 합니다."
    )
},
        {
            "role": "user",
            "content": (
                f"[사용자 질문]\n{user_query}\n\n"
                f"[참고 정보]\n{formatted_data}"
            )
        }
    ]

    openai.api_key = settings.OPENAI_API_KEY

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=messages,
        temperature=0.7,
        max_tokens=1000,
    )

    return response.choices[0].message["content"]
