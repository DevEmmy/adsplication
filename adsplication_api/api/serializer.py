from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import UserProfile, Withdrawal
from django.contrib.auth.models import User

class UserProfileSerialzer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = '__all__'


class WithdrawalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Withdrawal
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email','password']