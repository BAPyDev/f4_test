from .models import ToDo
from rest_framework import viewsets, permissions
from .serializers import ToDoSerializer


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ToDoSerializer

