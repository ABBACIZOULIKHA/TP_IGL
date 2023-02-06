from rest_framework import serializers
from .models import Annance, Profile, Photo, Message


class AnnanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Annance
        fields = ('id', 'titre', 'categorie', 'type', 'surface', 'description',
                  'prix', 'wilaya', 'commune', 'adresse', 'date', 'EmailAnnanceur', 'urlgoogleMap')

    def __init__(self, *args, **kwargs):
        super(AnnanceSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'nom', 'prenom', 'telephone',
                  'adresse', 'email')

    def __init__(self, *args, **kwargs):
        super(ProfileSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'image', 'titreAnnance')

    def __init__(self, *args, **kwargs):
        super(PhotoSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'status', 'contenu', 'userSource',
                  'userDestination', 'date', 'titreAnnance')

    def __init__(self, *args, **kwargs):
        super(MessageSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
