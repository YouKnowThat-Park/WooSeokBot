from django.urls import path
from .views import ask_dummy

urlpatterns = [
    path("ask/", ask_dummy),
]
