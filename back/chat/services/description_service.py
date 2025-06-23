def get_description_by_title(data: dict, selected_title: str) -> str:
    """
    - "박우석 정보" → 모든 profile.description 을 이어붙임
    - 그 외 slug_projects에서만 title 매칭
    """
    if selected_title.strip() == "박우석 정보":
        return "\n\n".join([
            f"- {item['title']}\n{item['description'].strip()}"
            for item in data.get("profiles", [])
            if item.get("description", "").strip()
        ]) or "내용 없음"

    for item in data.get("slug_projects", []):
        if item.get("title", "").strip() == selected_title:
            return item.get("description", "").strip() or "내용 없음"
    return "내용 없음"
