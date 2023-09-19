from worker.models import worker
from rest_framework import viewsets, permissions
from .serializers import WorkerSerializer

# Lead Viewset

class WorkerViewSet(viewsets.ModelViewSet):
    
    queryset = worker.objects.all()    # that will get all leads object (no auth until now)
    
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = WorkerSerializer