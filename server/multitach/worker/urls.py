from rest_framework import routers
from .api import WorkerViewSet

router = routers.DefaultRouter()
router.register('api/workers', WorkerViewSet, 'workers')

urlpatterns = router.urls