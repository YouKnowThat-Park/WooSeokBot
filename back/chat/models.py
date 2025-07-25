import uuid
from django.db import models

class ChatProfile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class SlugChatProject(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class ChatSession(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    query = models.TextField()
    response = models.TextField(default="", blank=True)
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Session {self.id}"


class ChatFeedback(models.Model):
    LIKE_CHOICES = [
        ("like",    "좋아요"),
        ("dislike", "싫어요"),
        ("none",    "선택안함"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nickname = models.CharField(max_length=50)
    password_hash = models.CharField(max_length=128)  # client-side에서 해시해서 저장
    content = models.TextField()
    like_status = models.CharField(max_length=10, choices=LIKE_CHOICES, default="none")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback by {self.nickname} on {self.created_at.strftime('%Y-%m-%d')}"
