from django.shortcuts import render
from .models import Annance, Photo, User, Profile
from django.core.paginator import Paginator
import folium
import geocoder
from rest_framework import generics, pagination
from rest_framework import permissions
from .serializers import AnnanceSerializer, ProfileSerializer, UserSerializer, PhotoSerializer
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
        annance_id = self.kwargs['pk']
        #annance = models.Annance.objects.get(id=annance_id)
        photos = models.Photo.objects.filter(idAnnance=annance_id)
        return photos


class AnnanceFiltreTitre(generics.ListAPIView):
    #queryset = models.Annance.objects.all()
    serializer_class = AnnanceSerializer

    def get_queryset(self):
        Titre = self.kwargs['titre']
        annonces = models.Annance.objects.filter(titre__icontains=Titre)
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


class UserList(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer


class PhotoList(generics.ListCreateAPIView):
    queryset = models.Photo.objects.all()
    serializer_class = PhotoSerializer


class PhotoAnnance(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Photo.objects.all()
    serializer_class = PhotoSerializer
