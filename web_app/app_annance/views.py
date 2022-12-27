from django.shortcuts import render
from .models import Annance
from django.core.paginator import Paginator
# Create your views here.


def index(request):
    annance_object = Annance.objects.all()
    item_name = request.GET.get('item-name')
    if item_name != '' and item_name is not None:
        annance_object = Annance.objects.filter(title__icontains=item_name)

    paginator = Paginator(annance_object, 4)
    page = request.GET.get('page')
    annance_object = paginator.get_page(page)
    return render(request, 'app_annance/index.html', {'annance_object': annance_object})
