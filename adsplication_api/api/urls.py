from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from .views import usersDetails, withdrawalsDetail, UsersAPI, saveProfile
from django.views.generic import TemplateView

urlpatterns = [
    path('users-details', usersDetails, name='users-details'),
    path('saveProfile', saveProfile, name='saveProfile'),
    path('withdrawals-details', withdrawalsDetail, name='withdrawals-details'),
    path('users-api', UsersAPI, name='users-api'),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        TemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password_reset_confirm'),

]