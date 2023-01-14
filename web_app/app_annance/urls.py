from django.urls import path, include
from rest_framework import routers
from . import views
from django.conf import settings
from django.conf.urls.static import static
# router = routers.DefaultRouter()
# router.register(r'annance', views.AnnanceViewSet)
urlpatterns = [
    # path('', include(router.urls)),
    path('annance/', views.AnnanceList.as_view()),
    path('annance/<int:pk>/', views.AnnanceDetail.as_view()),
    path('profile/', views.ProfileList.as_view()),
    path('profile/<int:pk>/', views.ProfileDetail.as_view()),
    path('user/', views.UserList.as_view()),
    path('user/<int:pk>/', views.UserDetail.as_view()),
    path('annancephoto/<int:pk>/', views.AnnancePhoto.as_view()),
    path('annancefiltretitre/<str:titre>/',
         views.AnnanceFiltreTitre.as_view()),
    path('annancefiltrewilaya/<str:wilaya>/',
         views.AnnanceFiltreWilaya.as_view()),
    path('annancefiltrecommune/<str:commune>/',
         views.AnnanceFiltreCommune.as_view()),
    path('annancefiltretype/<str:type>/',
         views.AnnanceFiltreType.as_view()),


]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
