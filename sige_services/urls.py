from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from user_services.api import viewsets as userviewsets

route = routers.DefaultRouter()
route.register(r'user', userviewsets.UserViewSet, basename='user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(route.urls))
]
