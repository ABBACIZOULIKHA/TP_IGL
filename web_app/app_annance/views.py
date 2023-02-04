from django.shortcuts import render
from rest_framework import generics, pagination

from .serializers import AnnanceSerializer, ProfileSerializer, PhotoSerializer, MessageSerializer
from . import models
# Create your views here.


# class AnnanceViewSet(viewsets.ModelViewSet):
#     serializer_class = AnnanceSerializer
#     queryset = Annance.objects.all().order_by('-date')


class AnnanceList(generics.ListCreateAPIView):
    queryset = models.Annance.objects.all()
    serializer_class = AnnanceSerializer
    pagination_class = pagination.LimitOffsetPagination


class AnnanceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Annance.objects.all()
    serializer_class = AnnanceSerializer


class AnnancePhoto(generics.ListAPIView):
    #queryset = models.Annance.objects.all()
    serializer_class = PhotoSerializer

    def get_queryset(self):
        id = self.kwargs['pk']
        annance = models.Annance.objects.get(id=id)
        titre = annance.titre
        photos = models.Photo.objects.filter(titreAnnance=titre)
        return photos


class AnnanceFiltreTitre(generics.ListAPIView):
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        Titre = self.kwargs['titre']
        annonces = models.Annance.objects.filter(titre__icontains=Titre)
        return annonces


class annancefiltreperiode(generics.ListAPIView):
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        date = self.kwargs['periode']
        annonces = models.Annance.objects.filter(date__icontains=date)
        return annonces


class AnnanceAnnanceur(generics.ListAPIView):
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        email = self.kwargs['email']
        emailAnnanceur = models.Profile.objects.get(email=email)
        annonces = models.Annance.objects.filter(EmailAnnanceur=emailAnnanceur)
        return annonces


class AnnanceFiltreWilaya(generics.ListAPIView):
    #queryset = models.Annance.objects.all()
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        Wilaya = self.kwargs['wilaya']
        annonces = models.Annance.objects.filter(wilaya=Wilaya)
        return annonces


class AnnanceFiltreCommune(generics.ListAPIView):
    #queryset = models.Annance.objects.all()
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        Commune = self.kwargs['commune']
        annonces = models.Annance.objects.filter(commune=Commune)
        return annonces


class AnnanceFiltreType(generics.ListAPIView):
    #queryset = models.Annance.objects.all()
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        Type = self.kwargs['type']
        annonces = models.Annance.objects.filter(type=Type)
        return annonces


class ProfileList(generics.ListCreateAPIView):
    queryset = models.Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileParEmail(generics.ListAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        email = self.kwargs['email']
        profile = models.Profile.objects.filter(email=email)
        return profile


class PhotoList(generics.ListCreateAPIView):
    queryset = models.Photo.objects.all()
    serializer_class = PhotoSerializer


class PhotoAnnance(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Photo.objects.all()
    serializer_class = PhotoSerializer


class PhotoFiltreTitreAnnance(generics.ListAPIView):
    serializer_class = PhotoSerializer

    def get_queryset(self):
        Titre = self.kwargs['titre']
        photos = models.Photo.objects.filter(titreAnnance=Titre)
        return photos


class MessageDetail(generics.ListAPIView):

    serializer_class = MessageSerializer

    def get_queryset(self):
        UserDestination = self.kwargs['userDestination']
        messages = models.Message.objects.filter(
            userDestination=UserDestination).update(status="read")
        return models.Message.objects.filter(
            userDestination=UserDestination)


class MessageList(generics.ListCreateAPIView):
    queryset = models.Message.objects.all()
    serializer_class = MessageSerializer


class MessageFiltreStatus(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        status = self.kwargs['status']
        messages = models.Message.objects.filter(status=status)
        return messages


class MessageDetail2(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Message.objects.all()
    serializer_class = MessageSerializer
