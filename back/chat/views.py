# chat/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def ask_dummy(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        question = data.get("query", "")
        return JsonResponse({ "answer": f"‘{question}’에 대한 응답입니다. 아직 Ai 연결이 안되어 있으며 DB 및 AI 기능 구현 중입니다." })

    return JsonResponse({ "error": "POST 요청만 허용됨" }, status=405)
