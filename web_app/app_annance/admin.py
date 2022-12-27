from django.contrib import admin
from .models import Annance, Profile, Photo, Message, User

# Register your models here.
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User


class AdminAnnance(admin.ModelAdmin):
    list_display = ('titre', 'categorie', 'type', 'surface',
                    'description', 'prix', 'wilaya', 'commune', 'adresse', 'date')


class AdminProfil(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'adresse', 'telephone')


class ProfileInline(admin.StackedInline):
    model = Profile


class TodoUserAdmin(UserAdmin):
    inlines = (ProfileInline, )


class AdminPhoto(admin.ModelAdmin):
    list_display = ('url', 'idAnnance')


class AdminMessage(admin.ModelAdmin):
    list_display = ('userSource', 'userDestination')


admin.site.register(Annance, AdminAnnance)
admin.site.register(Profile, AdminProfil)
admin.site.register(Photo, AdminPhoto)
admin.site.register(Message, AdminMessage)
admin.site.unregister(User)
admin.site.register(User, TodoUserAdmin)
