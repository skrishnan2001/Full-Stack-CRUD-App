from django.urls import path
from .views import RegisterView
from . import views

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', views.login_view, name='userapi-login'),
    path('logout/', views.logout_view, name='userapi-logout'),
    path('session/', views.session_view, name='userapi-session'),
    path('whoami/', views.whoami_view, name='userapi-whoami'),
]