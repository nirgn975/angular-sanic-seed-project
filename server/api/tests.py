from django.test import TestCase


class TestPensionApi(TestCase):

    def test_api_root(self):
        """
        Test the url of the api root.
        """
        response = self.client.get('/api/')
        self.assertEqual(response.status_code, 200)

        # When trailing slash is missing it should add it after redirection.
        response = self.client.get('/api')
        self.assertEqual(response.status_code, 301)
