# Generated by Django 4.1.4 on 2023-02-02 14:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_annance', '0003_alter_photo_idannance'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='username',
        ),
    ]
