from rest_framework import viewsets
from user_services.api import serializers
from user_services import models

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()