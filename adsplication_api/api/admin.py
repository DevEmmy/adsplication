from django.contrib import admin
from .models import UserProfile, Withdrawal

# Register your models here
admin.site.register(UserProfile)
admin.site.register(Withdrawal)