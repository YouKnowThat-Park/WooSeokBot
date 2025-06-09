from django.contrib import admin
from .models import ChatSession, ChatProfile, ChatProject, ChatFeedback, SlugChatProject
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

    
@admin.register(ChatFeedback)
class ChatFeedbackAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'related_project', 'created_at')
    search_fields = ('nickname', 'content')
    list_filter = ('created_at',)
    readonly_fields = ('nickname', 'content', 'password_hash', 'created_at')

@admin.register(SlugChatProject)
class SlugChatProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug', 'created_at')
    search_fields = ('title', 'slug', 'description')
    list_filter = ('created_at',)