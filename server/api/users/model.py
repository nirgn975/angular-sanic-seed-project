from os import getenv
from datetime import date
from playhouse.db_url import connect
from peewee import Model, CharField, TextField, DateField

print("foo", getenv('DB_URI'))
psql_db = connect(getenv('DB_URI'))


class User(Model):
    name = CharField(max_length=40)
    age = TextField(default=0)
    email = CharField(unique=True, null=False)
    date_joined = DateField(default=date.today())

    class Meta:
        database = psql_db
