from django.urls import path
from app_annance.views import index, editcompte, add, annanceDeposé, utilisateurs, detail

urlpatterns = [
    path('', index, name='index'),
    path('add', add, name='add'),
    path('annanceDeposé', annanceDeposé, name="annanceDeposé"),
    path('editcompte', editcompte, name="editcompte"),
    path('utilisateurs', utilisateurs, name="utilisateurs"),
    path("<int:idan>/", detail, name="detail"),
    path('annanceDeposé', annanceDeposé, name="annanceDeposé")

]
