
from django.contrib import admin
from django.urls import path, include
from .views import NoteListCreate, NodeDelete


urlpatterns = [
    
    path('notes/', NoteListCreate.as_view(), name="node-create-lost"),
    path('notes/<int:pk>/', NodeDelete.as_view(), name="node-delete"),

    
]
