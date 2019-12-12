from rest_framework import serializers
from twtr.models import Twtr, Profile, Reply, Follow
from django.contrib.auth.models import User

class TwtrSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    class Meta:
        model = Twtr
        fields = ['url', 'id', 'text', 'created', 'author']


class ReplySerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    target = serializers.PrimaryKeyRelatedField(queryset=Twtr.objects.all())

    class Meta:
        model = Reply
        fields = ['url', 'id', 'text', 'created', 'author', 'target']


class FollowSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    target = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Follow
        fields = ['url', 'id', 'author', 'target']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    tweets = serializers.PrimaryKeyRelatedField(many=True, queryset=Twtr.objects.all())
    following = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
    profile = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all())
    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'tweets', 'following', 'profile']


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    class Meta:
        model = Profile
        fields = ['url', 'bio', 'author']

