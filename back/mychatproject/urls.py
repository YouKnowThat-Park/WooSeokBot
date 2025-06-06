from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/chat/', include('chat.urls')),  # api/chat 경로에 chat 앱 연결
]
