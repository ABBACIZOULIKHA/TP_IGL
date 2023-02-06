from django.contrib import admin
from .models import Annance, Profile, Photo, Message


class AdminAnnance(admin.ModelAdmin):
    list_display = ('titre', 'categorie', 'type', 'surface',
                    'description', 'prix', 'wilaya', 'commune', 'adresse', 'date', 'EmailAnnanceur', 'urlgoogleMap')


class AdminProfil(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'adresse',
                    'telephone', 'email')


class AdminPhoto(admin.ModelAdmin):
    list_display = ('image', 'titreAnnance')


class AdminMessage(admin.ModelAdmin):
    list_display = ('userSource', 'userDestination',
                    'status', 'date', 'titreAnnance')


admin.site.register(Annance, AdminAnnance)
admin.site.register(Profile, AdminProfil)
admin.site.register(Photo, AdminPhoto)
admin.site.register(Message, AdminMessage)
