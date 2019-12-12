from django.contrib import admin
from .models import Twtr, Profile


class TwtrAdmin(admin.ModelAdmin):
    fields = ['created', 'text', 'author']

class ProfileAdmin(admin.ModelAdmin):
    fields = ['bio', 'username']


admin.site.register(Twtr, TwtrAdmin)
admin.site.register(Profile, ProfileAdmin)