from django.test import SimpleTestCase
from rest_framework.test import APITestCase
from rest_framework import status
from ..models import Profile, Message
from ..views import ProfileList
from django.urls import reverse, resolve
# Create your tests here.


class ApiUrlsTests(SimpleTestCase):
    def test_get_profile_is_resolved(self):
        url = reverse('profile')
        self.assertEquals(resolve(url).func.view_class, ProfileList)


class ProfileAPIViewTests(APITestCase):

    profile_url = reverse('profile')

    def setUp(self):
        self.profile = Profile.objects.create(
            nom='abbaci', prenom="zolikha", email='abbacitasnim1793@gmail.com')

    def tearDown(self):
        pass

    def test_get_profile(self):
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_profile(self):
        data = {
            "nom": "abbaci",
            "prenom": "zolulikha",
            "telephone": "0712453617",
            "adresse": "tipaza_rue de stade",
            "email": "abbacitasnim1@gmail.com",

        }
        response = self.client.post(self.profile_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['nom'], 'abbaci')


class MessageAPIViewTests(APITestCase):

    message_url = reverse('message')

    def setUp(self):
        self.message = Message.objects.create(
            userSource='abbacitasnim1@gmail.com', userDestination='kz_abbaci@esi.dz')

    def tearDown(self):
        pass

    def test_get_message(self):
        response = self.client.get(self.message_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
