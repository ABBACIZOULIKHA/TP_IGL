from django.contrib import admin
from .models import Annance, User, Photo, Message

# Register your models here.


class AdminAnnance(admin.ModelAdmin):
    list_display = ('titre', 'categorie', 'type', 'surface',
                    'description', 'prix', 'wilaya', 'commune', 'adresse', 'date')


class AdminUser(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'adresse', 'email', 'telephone')


class AdminPhoto(admin.ModelAdmin):
    list_display = ('url', 'idAnnance')


class AdminMessage(admin.ModelAdmin):
    list_display = ('idMessage', 'contenu')


admin.site.register(Annance, AdminAnnance)
admin.site.register(User, AdminUser)
admin.site.register(Photo, AdminPhoto)
admin.site.register(Message, AdminMessage)
