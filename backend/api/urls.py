from django.conf.urls import url, include
from api import views
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register('user', views.UserViewSet)
router.register('activity', views.ActivityViewSet)
router.register('task', views.TaskViewSet)
router.register('enroll', views.EnrollViewSet)

urlpatterns = [
    url('', include(router.urls)),
    url('login/', views.LoginView.as_view(), name='user_login'),
    url('register/$',views.UserCreateView.as_view(),name='accounts'),
    url('home/login/token/$', obtain_jwt_token),
    url('create/', views.TaskCreateView.as_view(), name='Create'),
    url('detail/(?P<pk>[\d-]+)/$', views.TaskDetailView.as_view(), name='Details'),
    url('update/(?P<pk>[\d-]+)/$', views.TaskUpdateView.as_view(), name='Update'),
    url('delete/(?P<pk>[\d-]+)/$', views.TaskDeleteView.as_view(), name='Delete'),
    url('author/(?P<username>[-\w]+)/$', views.AuthorTaskView.as_view(), name='Author-views.Task'),
    url('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]


