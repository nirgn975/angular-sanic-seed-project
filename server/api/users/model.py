from os import getenv
from datetime import date
from playhouse.db_url import connect
from dotenv import load_dotenv, find_dotenv
from peewee import Model, CharField, TextField, DateField

load_dotenv(find_dotenv())
psql_db = connect(getenv('DB_URI'))


class User(Model):
    name = CharField(max_length=40)
    age = TextField(default=0)
    email = CharField(unique=True, null=False)
    date_joined = DateField(default=date.today())

    class Meta:
        database = psql_db
