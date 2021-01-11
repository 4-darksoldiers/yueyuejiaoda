from api.models import Activity, Task, Enroll
from api.serializers import UserCreateSerializer, UserSerializer, ActivitySerializer, TaskSerializer, EnrollSerializer 
from rest_framework import generics, permissions, renderers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from django.contrib.auth import get_user_model

#from rest_auth.registration.views import SocialLoginView
from django.contrib import auth
from django.shortcuts import render
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import (AllowAny)
from rest_framework.generics import (
	CreateAPIView,
	DestroyAPIView,
	ListAPIView,
	RetrieveAPIView,
	RetrieveUpdateAPIView
)
from django.shortcuts import get_list_or_404
from rest_framework.permissions import(
	IsAuthenticatedOrReadOnly
)
from api.permissions import IsOwnerOrReadOnly

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'activities': reverse('activity-list', request=request, format=format),
        'tasks': reverse('task-list', request=request, format=format),
        'enrolls': reverse('enroll-list', request=request, format=format)
    })

User = auth.get_user_model()

class UserCreateView(CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserCreateSerializer
	permission_classes = (AllowAny, )

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginView(APIView):
    def post(self, request):
        username = self.request.data['username']
        password = self.request.data['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            request.session['user'] = username 
            from django.http import JsonResponse,HttpResponse
            response = JsonResponse({"result": 1},content_type = "application/x-www-form-urlencoded")
            return response

            #return HttpResponse({'success'})
        else:
            raise ValidationError({"result": 0})
      


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class TaskCreateView(CreateAPIView):
    #queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self,serializer):
        serializer.save(account=self.request.user)

class TaskDeleteView(DestroyAPIView):
    lookup_field = 'pk'
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetailView(RetrieveAPIView):
    lookup_field = 'pk'
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskUpdateView(RetrieveUpdateAPIView):
    lookup_field = 'pk'
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (IsOwnerOrReadOnly,)

class AuthorTaskView(APIView):

    @staticmethod
    def get(request, username):
        Tasks = get_list_or_404(Task, author__username=username)
        Task_data = TaskSerializer(tasks, many=True)
        return Response(Task_data.data)

class EnrollViewSet(viewsets.ModelViewSet):
    queryset = Enroll.objects.all()
    serializer_class = EnrollSerializer


