from django.conf.urls import url, include
from incling import views
from rest_framework.routers import DefaultRouter

"""
I'd prefer using DefaultRouter instead of SimpleRouter
as it also provides a default API root view when
just /incling/ endpoint is visited
"""
router = DefaultRouter()
router.register(r'classrooms', views.ClassroomViewSet)
router.register(r'students', views.StudentViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
