from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=30)
    phone_number = models.IntegerField(null=True, blank=True)
    account_number = models.IntegerField(null=True, blank=True)
    bank_name = models.CharField(max_length=20, null=True, blank=True)
    account_name = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.email 


class Withdrawal(models.Model):
    amount = models.IntegerField()
    customer = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    date_of_withdrawal = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return str(self.amount) + ' : ' + str(self.customer)

