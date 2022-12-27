# Generated by Django 4.1.4 on 2022-12-24 08:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Annance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=200)),
                ('categorie', models.CharField(choices=[('Vente', 'Vente'), ('Echange', 'Echange'), ('Location', 'Location'), ('Location_Vacances', 'Location_Vacances')], max_length=50, null=True)),
                ('type', models.CharField(max_length=200)),
                ('surface', models.CharField(max_length=200)),
                ('description', models.TextField(null=True)),
                ('prix', models.IntegerField(null=True)),
                ('wilaya', models.CharField(max_length=50)),
                ('commune', models.CharField(max_length=50)),
                ('adresse', models.TextField(blank=True)),
                ('date', models.DateField(null=True)),
                ('idAnnanceur', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=50)),
                ('prenom', models.CharField(max_length=50)),
                ('telephone', models.IntegerField()),
                ('adresse', models.CharField(max_length=200)),
                ('idAnnancePrefere', models.ManyToManyField(to='app_annance.annance')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('idAnnance', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app_annance.annance')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contenu', models.TextField(max_length=250)),
                ('userSource', models.CharField(max_length=60)),
                ('userDestination', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]