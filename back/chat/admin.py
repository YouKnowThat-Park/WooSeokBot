from django.contrib import admin
from .models import ChatSession, ChatProfile, ChatProject
@admin.register(ChatSession)
class ChatSessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'query', 'token', 'created_at')
    search_fields = ('query', 'token')
    list_filter = ('created_at',)

@admin.register(ChatProfile)
class ChatProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)

@admin.register(ChatProject)
class ChatProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)