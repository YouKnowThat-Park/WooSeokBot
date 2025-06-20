def slug_to_base(slug: str) -> str:
    """숫자를 제거해 슬러그의 기본 형태만 남겨 반환."""
    return ''.join(c for c in slug if not c.isdigit())

def format_list_for_prompt(items: list[str]) -> str:
    """['A','B'] → '- A\n- B' 처럼 변환."""
    return "\n".join(f"- {i}" for i in items)