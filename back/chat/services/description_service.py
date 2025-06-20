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