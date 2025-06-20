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

def get_last_user_question(token: str) -> str:
    """
    DB에서 가장 최근 user query 한 건만 꺼내 돌려줌
    """
    recent = ChatSession.objects.filter(token=token).order_by('-created_at')[:1]
    if not recent:
        return "아직 이전에 하신 질문이 없습니다."
    return f"직전에 하신 질문은 다음과 같습니다:\n\n“{recent[0].query}”"