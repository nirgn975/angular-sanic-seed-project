from json import loads
from sanic.views import HTTPMethodView
from sanic.response import json, text
from peewee import IntegrityError

from api.users.model import User


class UsersView(HTTPMethodView):
    async def get(self, request):
        users = User.select()
        return json({
            '_message': 'Users fetched successfully!',
            'users': users,
        })

    async def post(self, request):
        try:
            new_user = User.create(**loads(request.body))
            return json({
                '_message': 'User created successfully!',
                'user': new_user,
            })
        except IntegrityError as e:
            if "email" in str(e):
                return json({
                    '_message': 'Should fill out email field',
                    'user': None,
                })

    async def put(self, request):
        return text('I am put method')

    async def delete(self, request):
        return text('I am delete method')


class GetUsersView(HTTPMethodView):
    async def get(self, request, id):
        try:
            user = User.get(User.id == id)
            return json({
                '_message': 'User fetched successfully!',
                'user': user
            })
        except User.DoesNotExist:
            return json({
                '_message': 'User does not exist',
                'user': None
            })
