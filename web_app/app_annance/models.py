from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.


class Wilaya(models.Model):
    nom = models.CharField(max_length=60)

    def __str__(self):
        return self.nom


class Commune(models.Model):
    nom = models.CharField(max_length=60)
    idwilaya = models.IntegerField()

    def __str__(self):
        return self.nom


class Annance(models.Model):
    CATEGORIE = (
        ('Vente', 'Vente'),
        ('Echange', 'Echange'),
        ('Location', 'Location'),
        ('Location_Vacances', 'Location_Vacances'),
    )

    titre = models.CharField(max_length=200)
    categorie = models.CharField(
        max_length=50, null=True, choices=CATEGORIE)
    type = models.CharField(max_length=200)
    surface = models.CharField(max_length=200)
    description = models.TextField(null=True)
    prix = models.IntegerField(null=True)
    wilaya = models.OneToOneField(
        Wilaya, on_delete=models.CASCADE, related_name='Annance')
    commune = models.CharField(max_length=50)
    adresse = models.TextField(blank=True)
    date = models.DateField(null=True)
    idAnnanceur = models.ForeignKey(
        User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.titre

    class Meta:
        ordering = ['-date']


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='Profile')
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    telephone = PhoneNumberField()
    adresse = models.CharField(max_length=200)

    def __str__(self):
        return self.user.username


class Photo(models.Model):

    url = models.URLField(max_length=200)
    idAnnance = models.ForeignKey(
        Annance, null=True, on_delete=models.SET_NULL)


class Message(models.Model):

    contenu = models.TextField(max_length=250)
    userSource = models.CharField(max_length=60)
    userDestination = models.ForeignKey(
        User, null=True, on_delete=models.SET_NULL)
