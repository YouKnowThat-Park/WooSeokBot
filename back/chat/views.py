from django.http import JsonResponse, HttpResponseNotFound, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt
import json, uuid, secrets
from .models import ChatSession, ChatProfile, ChatProject


@csrf_exempt
def create_chat(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            query = data.get("query")
            if not query:
                return JsonResponse({"error": "query is required"}, status=400)

            chat_id = uuid.uuid4()
            token = secrets.token_hex(32)

            # 키워드 기반 검색 응답
            profiles = ChatProfile.objects.filter(title__icontains=query)
            projects = ChatProject.objects.filter(title__icontains=query)

            profile_results = [p.description for p in profiles]
            project_results = [p.description for p in projects]
            all_results = profile_results + project_results

            if all_results:
                answer = "\n\n".join(all_results)
            else:
                answer = f"우석이의 답변입니다: '{query}'에 대한 정보가 없습니다."

            ChatSession.objects.create(id=chat_id, query=query, token=token)

            return JsonResponse({
                "chatId": str(chat_id),
                "token": token,
                "query": query,
                "answer": answer
            })
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Only POST allowed"}, status=405)


def get_chat(request, chat_id):
    if request.method != "GET":
        return JsonResponse({"error": "Only GET allowed"}, status=405)

    try:
        chat = ChatSession.objects.get(id=chat_id)
    except ChatSession.DoesNotExist:
        return HttpResponseNotFound("해당 챗이 존재하지 않습니다.")

    client_token = request.headers.get("Authorization", "").replace("Bearer ", "")
    if client_token != chat.token:
        return HttpResponseForbidden("❌ 인증 실패")

    return JsonResponse({"query": chat.query})


@csrf_exempt
def chat_ask(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            query = data.get("query")
            if not query:
                return JsonResponse({"error": "query is required"}, status=400)

            # 키워드 기반 검색
            profiles = ChatProfile.objects.filter(title__icontains=query)
            projects = ChatProject.objects.filter(title__icontains=query)

            profile_results = [p.description for p in profiles]
            project_results = [p.description for p in projects]
            all_results = profile_results + project_results

            if all_results:
                answer = "\n\n".join(all_results)
            else:
                answer = f"'{query}'에 대한 관련된 정보를 찾을 수 없습니다."

            return JsonResponse({"answer": answer})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Only POST allowed"}, status=405)
