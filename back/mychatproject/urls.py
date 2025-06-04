# mychatproject/urls.py

from django.contrib import admin
from django.urls import path, include  # ✅ include 꼭 있어야 함

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/chat/", include("chat.urls")),  # ✅ 이 줄이 핵심이야!
]
