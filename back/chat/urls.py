from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.create_chat, name='create_chat'),
    path('chat/<uuid:chat_id>/', views.get_chat, name='get_chat'),
    path('chat/ask/', views.chat_ask, name='chat_ask'),
    path('chat/feedback/', views.submit_feedback, name='submit_feedback'),
    path('chat/ask/<slug:slug>/', views.chat_ask_by_slug, name='chat-ask-by-slug'),
]