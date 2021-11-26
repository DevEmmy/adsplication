from django.shortcuts import render
from rest_framework import serializers
from .serializer import UserProfileSerialzer, WithdrawalSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import UserProfile, Withdrawal
from django.contrib.auth.models import User


# Create your views here.
@api_view(['GET','POST'])
def usersDetails(request):
    if request.method == 'GET':
        users = UserProfile.objects.all()
        serializer = UserProfileSerialzer(users, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserProfileSerialzer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.status)

    return Response(None)

@api_view(['GET','POST'])
def saveProfile(request):
    serializer = UserProfileSerialzer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    users = UserProfile.objects.all()
    serializer = UserProfileSerialzer(users, many = True)
    return Response(serializer.data)
        


@api_view(['GET',])
def withdrawalsDetail(request):
    items = Withdrawal.objects.all()
    serializer = WithdrawalSerializer(items, many = True)
    return Response(serializer.data)



@api_view(['GET',])
def UsersAPI(request):
    users = User.objects.all()
    print(users)
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data)


