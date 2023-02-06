from django.db import models
# Create your models here.


class Profile(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    telephone = models.CharField(max_length=50)
    adresse = models.CharField(max_length=200)
    email = models.EmailField(max_length=254, null=True, unique=True)

    def __str__(self):
        return self.email


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
    wilaya = models.CharField(max_length=50)
    commune = models.CharField(max_length=50)
    adresse = models.TextField(blank=True)
    date = models.DateField(null=True)
    EmailAnnanceur = models.EmailField(max_length=254, null=True)
    urlgoogleMap = models.URLField(max_length=200, null=True)

    def __str__(self):
        return self.titre

    class Meta:
        ordering = ['-date']


class Photo(models.Model):

    image = models.ImageField(upload_to='annonce_imgs/', null=True)
    titreAnnance = models.CharField(max_length=200)


class Message(models.Model):
    Etat = (
        ('read', 'read'),
        ('unread', 'unread'),
    )
    status = models.CharField(
        max_length=50, null=True, choices=Etat)
    contenu = models.TextField(max_length=250)
    userSource = models.EmailField(max_length=254, null=True)
    userDestination = models.EmailField(max_length=254, null=True)
    date = models.DateField(null=True)
    titreAnnance = models.CharField(
        max_length=200, null=True)

    class Meta:
        ordering = ['-date']
