def get_description_by_title(data: dict, selected_title: str) -> str:
    """
    - "박우석 정보" → 모든 profile.description 을 이어붙임
    - 그 외 모든 profiles + slug_projects 에서 title 매칭
    """
    if selected_title.strip() == "박우석 정보":
        return "\n\n".join([
            f"- {item['title']}\n{item['description'].strip()}"
            for item in data.get("profiles", [])
            if item.get("description", "").strip()
        ]) or "내용 없음"

    combined = data.get("profiles", []) + data.get("slug_projects", [])
    for item in combined:
        if item.get("title", "").strip() == selected_title:
            return item.get("description", "").strip() or "내용 없음"

    return "내용 없음"