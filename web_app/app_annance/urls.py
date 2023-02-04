from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf import settings
from django.conf.urls.static import static
# router = routers.DefaultRouter()
# router.register(r'annance', views.AnnanceViewSet)
urlpatterns = [
    # path('', include(router.urls)),
    path('annance/', views.AnnanceList.as_view(), name="annance"),
    path('photo/', views.PhotoList.as_view()),
    path('message/', views.MessageList.as_view(), name="message"),
    path('annance/<int:pk>/', views.AnnanceDetail.as_view()),
    path('message/<int:pk>/', views.MessageDetail2.as_view()),
    path('profile/', views.ProfileList.as_view(), name="profile"),
    path('profile/<int:pk>/', views.ProfileDetail.as_view(), name="profile-detail"),
    path('annancephoto/<int:pk>/', views.AnnancePhoto.as_view()),
    path('annancefiltretitre/<str:titre>/',
         views.AnnanceFiltreTitre.as_view()),
    path('ProfileParEmail/<str:email>/',
         views.ProfileParEmail.as_view()),
    path('annancefiltreperiode/<str:periode>/',
         views.annancefiltreperiode.as_view()),

    path('MessageFiltreStatus/<str:status>/',
         views.MessageFiltreStatus.as_view()),
    path('PhotoFiltreTitreAnnance/<str:titre>/',
         views.PhotoFiltreTitreAnnance.as_view()),
    path('annancefiltrewilaya/<str:wilaya>/',
         views.AnnanceFiltreWilaya.as_view()),
    path('annancefiltrecommune/<str:commune>/',
         views.AnnanceFiltreCommune.as_view()),
    path('annancefiltretype/<str:type>/',
         views.AnnanceFiltreType.as_view()),
    path('annance_annanceur/<str:email>/',
         views.AnnanceAnnanceur.as_view()),
    path('Mymessage/<str:userDestination>/', views.MessageDetail.as_view()),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
