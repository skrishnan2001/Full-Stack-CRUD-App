from rest_framework import routers
from userapi.viewsets import UserViewset

router = routers.DefaultRouter()
router.register('user', UserViewset)

