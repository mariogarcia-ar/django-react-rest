from . import models 
from . import serializer 
from rest_framework import viewsets, permissions

class TaskViewSet(viewsets.ModelViewSet):
    queryset = models.Task.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializer.TaskSerializer
