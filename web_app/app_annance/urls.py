from django.urls import path
from app_annance.views import index

urlpatterns = [
    path('', index, name='home')
]
