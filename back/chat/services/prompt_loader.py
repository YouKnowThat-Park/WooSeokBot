# back/chat/services/prompt_loader.py

import os
from django.conf import settings

# settings.BASE_DIR 은 manage.py 가 위치한 디렉토리입니다.
PROMPT_DIR = os.path.join(settings.BASE_DIR, "chat", "prompts")

def load_prompt(filename: str) -> str:
    """
    prompts/ 폴더 안의 텍스트 파일을 읽어와
    그 내용을 그대로 문자열로 반환합니다.
    
    사용 예)
        system = load_prompt("system_match_slug.txt")
        system.format(title_list=...)
    """
    path = os.path.join(PROMPT_DIR, filename)
    with open(path, encoding="utf-8") as f:
        return f.read()
