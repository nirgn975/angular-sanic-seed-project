from datetime import date
from peewee import Model, CharField, TextField, DateField


class User(Model):
    name = CharField(max_length=40)
    age = TextField(default=0)
    email = CharField(unique=True, null=False)
    date_joined = DateField(default=date.today())
