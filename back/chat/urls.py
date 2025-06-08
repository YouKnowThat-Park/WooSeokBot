from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_chat, name='create_chat'),
    path('<uuid:chat_id>/', views.get_chat, name='get_chat'),
    path('ask/', views.chat_ask, name='chat_ask'),
    path('feedback/', views.submit_feedback, name='submit_feedback'),  # ✅ 이건 views/__init__.py에 export 되어 있어야 작동
]