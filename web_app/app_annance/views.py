from django.shortcuts import render
from .models import Annance, Photo, User, Profile, Wilaya
from django.core.paginator import Paginator
# Create your views here.


def index1(request):
    annance_object = Annance.objects.all()
    item_name = request.GET.get('item-name')
    if item_name != '' and item_name is not None:
        annance_object = Annance.objects.filter(
            prix__icontains=item_name).values

    paginator = Paginator(annance_object, 4)
    page = request.GET.get('page')
    annance_object = paginator.get_page(page)
    return render(request, 'app_annance/index.html', {'annance_object': annance_object})


def index(request):
    annance_object = Annance.objects.all()
    item_name = request.GET.get('item_name')
    if item_name != '' and item_name is not None:
        annance_object = Annance.objects.filter(titre__icontains=item_name)
    paginator = Paginator(annance_object, 4)
    page = request.GET.get('page')
    annance_object = paginator.get_page(page)

    photo_object = Photo.objects.all()
    return render(request, 'app_annance/index.html', {'annance_object': annance_object, 'photo_object': photo_object})


def add(request):
    return render(request, 'app_annance/add.html')


def MonCompte(request):
    return render(request, 'app_annance/MonCompte.html')


def utilisateurs(request):
    return render(request, 'app_annance/utilisateurs.html')


def editcompte(request):
    return render(request, 'app_annance/editcompte.html')


def annanceDeposé(request):
    return render(request, 'app_annance/annanceDeposé.html')


def detail(request, idan):
    annance2_objects = Annance.objects.get(id=idan)
    photo_objects = Photo.objects.get(idAnnance=idan)
    annanceur_objects = User.objects.get(username=annance2_objects.idAnnanceur)
    return render(request, 'app_annance/detail.html', {'annance2_objects': annance2_objects, 'photo_objects': photo_objects, 'annanceur_objects': annanceur_objects})


def utilisateurs(request):
    user_objects = Profile.objects.all()
    return render(request, 'app_annance/utilisateurs.html', {'user_objects': user_objects})


def annanceDeposé(request):

    wilaya_objects = Wilaya.objects.all()

    if request.method == "POST":
        titre = request.POST.get('titre')
        categorie = request.POST.get('categorie')
        type = request.POST.get('type')
        surface = request.POST.get('surface')
        prix = request.POST.get('prix')
        wilaya = request.POST.get('wilaya')
        commune = request.POST.get('commune')
        adresse = request.POST.get('adresse')
        photo = request.POST.get('photo')
        description = request.POST.get('description')

        # email = request.POST.get('email')
        # username = ''
        # postUser = User(email='email', username='username')
        # postUser.save()
        # id = postUser.id

        wilaya1 = Wilaya.objects.get(nom=wilaya)

        postAnnance = Annance(titre='titre', categorie='categorie', type='type', surface='surface',
                              prix='prix', wilaya='wilaya1', commune='commune', adresse='adresse', description='description')

        postAnnance.save()
        idAnnance = postAnnance.id
        postPhoto = Photo(photo='url', idAnnance='idAnnance')
        postPhoto.save()
    return render(request, 'app_annance/annanceDeposé.html', {'wilaya_objects': wilaya_objects})
