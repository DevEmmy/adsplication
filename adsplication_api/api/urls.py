from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from .views import usersDetails, withdrawalsDetail, UsersAPI, login_view

urlpatterns = [
    path('users-details', usersDetails, name='users-details'),
    path('withdrawals-details', withdrawalsDetail, name='withdrawals-details'),
    path('users-api', UsersAPI, name='users-api'),
    path('login_view', login_view, name='login_view'),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls'))

]