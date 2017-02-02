from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User


class UsersApiTestCase(APITestCase):
    def setUp(self):
        User.objects.create_superuser('admin', 'admin@example.com', 'admin12345')

    def test_get_users_objects(self):
        response = self.client.get('/api/users/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['email'], 'admin@example.com')
        self.assertEqual(response.data[0]['username'], 'admin')
        self.assertEqual(response.data[0]['url'], 'http://testserver/api/users/1/')
