from os import getenv
from json import loads
from peewee import OperationalError
from playhouse.db_url import connect

from api.users.model import User

psql_db = connect(getenv('DB_URI'))


def seed_db():
    '''
    Create all the models tables, and seed them with some dummy data.
    '''
    # Create the tables.
    try:
        psql_db.create_tables([User], True)
    except OperationalError as e:
        print("cannot create postgres tables", e)

    # Create dummy data.
    new_user = User.create(name="nir", age="29", email="nir@example.com")
