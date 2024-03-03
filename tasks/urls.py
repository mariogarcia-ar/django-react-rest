from rest_framework import routers 
from . import api 

router = routers.DefaultRouter()

# crud
router.register("api/tasks", api.TaskViewSet, "tasks")

urlpatterns = router.urls