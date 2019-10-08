from main import app


def test_new_user():
    request, response = app.test_client.get('/users')
    print("request", request)
    print("response", response)
    assert response.status == 404
