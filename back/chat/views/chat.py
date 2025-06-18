from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
from django_ratelimit.decorators import ratelimit
import uuid, secrets
from datetime import timedelta

from ..models import ChatSession, ChatProfile, SlugChatProject
from ..prompts import generate_ai_answer


@ratelimit(key='ip', rate='12/m', block=True)
@api_view(['POST'])
def create_chat(request):
    query = request.data.get("query")
    if not query:
        return Response({"error": "query is required"}, status=status.HTTP_400_BAD_REQUEST)

    # 24시간 이전 대화 삭제
    cutoff = timezone.now() - timedelta(hours=24)
    ChatSession.objects.filter(created_at__lt=cutoff).delete()

    chat_id = uuid.uuid4()
    token = secrets.token_hex(32)

    # Profiles 와 SlugProjects 만 불러옴
    profiles = ChatProfile.objects.all()
    slugs    = SlugChatProject.objects.all()

    data = {
        "profiles":      list(profiles.values("title", "description")),
        "slug_projects": list(slugs.values("slug", "title", "description")),
    }

    answer = generate_ai_answer(query, data, token)

    # DB 저장
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


@api_view(['POST'])
def chat_ask(request):
    query = request.data.get("query")
    token = request.data.get("token")
    if not query or not token:
        return Response({"error": "query and token are required"}, status=status.HTTP_400_BAD_REQUEST)

    # 1) 질문 먼저 저장 (response는 빈 문자열)
    chat = ChatSession.objects.create(
        query=query,
        response="",
        token=token,
    )

    # 2) Profiles 와 SlugProjects 만 불러옴
    profiles = ChatProfile.objects.all()
    slugs    = SlugChatProject.objects.all()
    data = {
        "profiles":      list(profiles.values("title", "description")),
        "slug_projects": list(slugs.values("slug", "title", "description")),
    }

    answer = generate_ai_answer(query, data, token)

    # 3) 응답 업데이트
    chat.response = answer
    chat.save(update_fields=["response"])

    return Response({"query": query, "answer": answer}, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_chat(request, chat_id):
    try:
        chat = ChatSession.objects.get(id=chat_id)
    except ChatSession.DoesNotExist:
        return Response({"error": "해당 챗이 존재하지 않습니다."}, status=status.HTTP_404_NOT_FOUND)

    return Response({
        "query":    chat.query,
        "response": chat.response,
        "token":    chat.token,
    }, status=status.HTTP_200_OK)



@api_view(['POST'])
@ratelimit(key='ip', rate='12/m', block=True)
def chat_ask_by_slug(request, slug: str):
    query = request.data.get("query")
    if not query:
        return Response({"error": "query is required"}, status=status.HTTP_400_BAD_REQUEST)

    # token이 없으면 새로 만들기
    token = request.data.get("token")
    new_token = False
    if not token:
        token = secrets.token_hex(32)
        new_token = True

    # 슬러그가 실제로 존재하는지 체크
    try:
        project = SlugChatProject.objects.get(slug=slug)
    except SlugChatProject.DoesNotExist:
        return Response(
            {"error": f"프로젝트 '{slug}'을 찾을 수 없습니다."},
            status=status.HTTP_404_NOT_FOUND
        )

    # GPT에 넘길 data 구성
    data = {
        "profiles":      [],
        "slug_projects": [{
            "slug":        project.slug,
            "title":       project.title,
            "description": project.description
        }],
    }

    # 답변 생성
    answer = generate_ai_answer(query, data, token)

    # DB에 세션 저장 (create_chat처럼)
    chat_id = uuid.uuid4()
    ChatSession.objects.create(
        id=chat_id,
        query=query,
        response=answer,
        token=token,
    )

    # 새 토큰을 발급한 경우엔 201, 기존 토큰이면 200
    status_code = status.HTTP_201_CREATED if new_token else status.HTTP_200_OK
    response_payload = {
        "chatId": str(chat_id),
        "token":   token,
        "query":   query,
        "answer":  answer
    }

    return Response(response_payload, status=status_code)