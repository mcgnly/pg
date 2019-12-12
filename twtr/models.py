from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Twtr(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=100, blank=True, default='')
    author = models.ForeignKey('auth.User', related_name='tweets', on_delete=models.CASCADE)

    class Meta:
        ordering = ['-created']

class Reply(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    target = models.ForeignKey('Twtr', on_delete=models.CASCADE)
    text = models.TextField(max_length=500, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created']

class Profile(models.Model):
    author = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)

class Follow(models.Model):
    author = models.ForeignKey('auth.User', related_name='following', on_delete=models.CASCADE)
    target = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('author', 'target')


