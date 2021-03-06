from rest_framework import serializers
#from .models import User
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','first_name', 'last_name', 'username', 'email', 'password', 'is_superuser')
        #field = '__all__'

    def validate(self, attrs):
        username=attrs.get('username', '')
        userList = User.objects.filter(username=username).all()
        user = userList[0] if userList else None
        if User.objects.filter(username=username).exists() and user is None:
            raise serializers.ValidationError({'username': ('Username is already taken!')})
        return super().validate(attrs);

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

