from django.urls import path, include
from rest_framework.routers import DefaultRouter
from twtr import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'tweets', views.TwtrViewSet)
router.register(r'replies', views.ReplyViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'following', views.FollowViewSet)
router.register(r'profiles', views.ProfileViewSet)
router.register(r'my-profile', views.MyProfile, basename='my-profile')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name="index"),
    path('api/current-user/', views.current_user, name="current_user"),
]