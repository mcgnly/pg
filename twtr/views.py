from twtr.models import Twtr, Profile, Reply, Follow
from twtr.serializers import TwtrSerializer, ProfileSerializer, ReplySerializer, FollowSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from twtr.serializers import UserSerializer
from rest_framework import permissions
from twtr.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from django.shortcuts import render
from rest_framework import renderers
from rest_framework.response import Response

@api_view(['GET'])
def index(request):
    return render(request, "build/index.html")

@api_view(['GET'])
def current_user(request):
    user = request.user
    return Response({
        'username': user.username,
    })

class MyProfile(viewsets.ModelViewSet):
    """
    View the profile of the authenticated user
    This view should return the profile of the currently authenticated user.
    """
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Profile.objects.filter(author=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    View all users
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TwtrViewSet(viewsets.ModelViewSet):
    """
    View all tweets
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Twtr.objects.all()
    serializer_class = TwtrSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ReplyViewSet(viewsets.ModelViewSet):
    """
    View all replies to a tweet
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class ProfileViewSet(viewsets.ModelViewSet):
    """
    View all profiles
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly,
    #     IsOwnerOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class FollowViewSet(viewsets.ModelViewSet):
    """
    View all following
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly,
    #     IsOwnerOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)