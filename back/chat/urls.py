from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_chat, name='create_chat'),  # POST /api/chat/
    path('<uuid:chat_id>/', views.get_chat, name='get_chat'),  # GET /api/chat/<uuid>/
    path('ask/', views.chat_ask, name='chat_ask'),  # POST /api/chat/ask/
]