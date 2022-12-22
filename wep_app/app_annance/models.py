from django.db import models


# Create your models here.


categorie = (
    'vente',
    'echange',
    'location',
    'location_vacance',
)


class User (models.Model):
    idUser = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=200)
    prenom = models.CharField(max_length=200)
    adresse = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    telephone = models.CharField(max_length=200)
    idAnnancePreféré = models.IntegerField()


class Annance(models.Model):
    idAnnance = models.AutoField(primary_key=True)
    titre = models.CharField(max_length=200)
    categorie = models.CharField(max_length=200)
    #models.CharField(max_length=50, choices=categorie, default='')
    type = models.CharField(max_length=200)
    surface = models.CharField(max_length=200)
    description = models.TextField(null=True)
    prix = models.IntegerField(null=True)
    wilaya = models.CharField(max_length=50)
    commune = models.CharField(max_length=50)
    adresse = models.TextField(blank=True)
    date = models.DateField(null=True)
    idAnnanceur = models.IntegerField()


class Photo(models.Model):
    idPhoto = models.AutoField(primary_key=True)
    url = models.URLField(max_length=200)
    idAnnance = models.IntegerField()


class Message(models.Model):
    idMessage = models.AutoField(primary_key=True)
    contenu = models.TextField(max_length=250)
   # idUserSource = models.ForeignKey('User', on_delete=models.CASCADE)
    #idUserDestination = models.ForeignKey('User', on_delete=models.CASCADE)
