from django.shortcuts import render
from .serializer import UserProfileSerialzer, WithdrawalSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import UserProfile, Withdrawal
from django.contrib.auth.models import User


# Create your views here.
@api_view(['GET',])
def usersDetails(request):
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



@api_view(['POST',])
def login_view(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        users = User.objects.get(email = request.data['email'])
        serializer = UserSerializer(users, many = True)
    else:
        return None
    return Response(serializer.data)