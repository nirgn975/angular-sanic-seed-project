from sanic import Blueprint

from api.users.view import UsersView, GetUsersView

users_routes = Blueprint('users_routes', url_prefix='/users', strict_slashes=True)

users_routes.add_route(UsersView.as_view(), '')
users_routes.add_route(GetUsersView.as_view(), '/<id>')
