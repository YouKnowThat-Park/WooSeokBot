# chat/views/chat.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import uuid, secrets
from ..models import ChatSession, ChatProfile, ChatProject
from ..serializers import ChatSessionCreateSerializer
from django.utils import timezone
from datetime import timedelta

@api_view(['POST'])
def create_chat(request):
    query = request.data.get("query")
    if not query:
        return Response({"error": "query is required"}, status=status.HTTP_400_BAD_REQUEST)

    # ✅ 24시간 이전 세션 정리
    cutoff = timezone.now() - timedelta(hours=24)
    ChatSession.objects.filter(created_at__lt=cutoff).delete()

    chat_id = uuid.uuid4()
    token = secrets.token_hex(32)

    # 🔍 키워드 검색
    profiles = ChatProfile.objects.filter(title__icontains=query)
    projects = ChatProject.objects.filter(title__icontains=query)

    profile_results = [p.description for p in profiles]
    project_results = [p.description for p in projects]
    all_results = profile_results + project_results

    if all_results:
        answer = "\n\n".join(all_results)
    else:
        answer = f"우석이의 답변입니다: '{query}'에 대한 정보가 없습니다."

    # ✅ 질문 + 응답 저장
    ChatSession.objects.create(
        id=chat_id,
        query=query,
        response=answer,
        token=token,
    )

    return Response({
        "chatId": str(chat_id),
        "token": token,
        "query": query,
        "answer": answer,
    }, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_chat(request, chat_id):
    try:
        chat = ChatSession.objects.get(id=chat_id)
    except ChatSession.DoesNotExist:
        return Response({"error": "해당 챗이 존재하지 않습니다."}, status=status.HTTP_404_NOT_FOUND)

    # ✅ 누구나 볼 수 있도록 인증 제거
    return Response({
        "query": chat.query,
        "response": chat.response,
    }, status=status.HTTP_200_OK)

@api_view(['POST'])
def chat_ask(request):
    query = request.data.get("query")
    if not query:
        return Response({"error": "query is required"}, status=status.HTTP_400_BAD_REQUEST)

    profiles = ChatProfile.objects.filter(title__icontains=query)
    projects = ChatProject.objects.filter(title__icontains=query)

    profile_results = [p.description for p in profiles]
    project_results = [p.description for p in projects]
    all_results = profile_results + project_results

    if all_results:
        answer = "\n\n".join(all_results)
    else:
        answer = f"'{query}'에 대한 관련된 정보를 찾을 수 없습니다."

    return Response({
    "query": query,
    "answer": answer
}, status=status.HTTP_200_OK)
