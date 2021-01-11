from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from rest_framework_jwt.settings import api_settings



User = get_user_model()


class UserCreateSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password',
            'token'
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def get_token(self, object):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(object)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
    
        if User.objects.filter(username = username).count():
            raise serializers.ValidationError('用户名已经存在')
        # user.set_password(validated_data['password'])
        else:
            user.save()
            return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'email'
        ]


class ActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Activity
        lookup_field = 'pk'
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        lookup_field = 'pk'
        fields = '__all__'


class EnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enroll
        fields = '__all__'
