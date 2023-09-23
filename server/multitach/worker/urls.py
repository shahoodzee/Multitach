from django.urls import path
from rest_framework import routers
from . import views
from .api import WorkerViewSet

urlpatterns = [
    # Custom URL patterns for CRUD operations
    path('api/workers/', views.get_workers, name='get_workers'),
    path('api/workers/<int:worker_id>/', views.get_worker, name='get_worker'),
    path('api/workers/create/', views.create_worker, name='create_worker'),
    path('api/workers/update/<int:worker_id>/', views.update_worker, name='update_worker'),
    path('api/workers/delete/<int:worker_id>/', views.delete_worker, name='delete_worker'),
    path('api/workers/login/', views.login_worker, name='login_worker'),
    
]

# Include the default router-generated URL patterns
router = routers.DefaultRouter()
router.register('api/workers', WorkerViewSet, 'workers')
urlpatterns += router.urls
