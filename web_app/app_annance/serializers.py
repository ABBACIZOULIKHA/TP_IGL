from rest_framework import serializers
from .models import Annance, Profile, Photo, User


class AnnanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annance
        fields = ('id', 'titre', 'categorie', 'type', 'surface', 'description',
                  'prix', 'wilaya', 'commune', 'adresse', 'date', 'idAnnanceur')

    def __init__(self, *args, **kwargs):
        super(AnnanceSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'nom', 'prenom', 'telephone', 'adresse', 'user')

    def __init__(self, *args, **kwargs):
        super(ProfileSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'url', 'idAnnance')

    def __init__(self, *args, **kwargs):
        super(PhotoSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')

    def __init__(self, *args, **kwargs):
        super(UserSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
