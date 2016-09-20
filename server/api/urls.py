from api import views
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', views.UserViewSet, base_name='user')

urlpatterns = [
    url(r'^', include(router.urls)),
]
