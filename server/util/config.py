from os import getenv
from peewee import PostgresqlDatabase


def connect_to_db():
    global psql_db
    psql_db = PostgresqlDatabase(
        database=getenv('DB_NAME'),
        host=getenv('HOST'),
        port=getenv('DB_PORT'),
        user=getenv('DB_USER'),
        password=getenv('DB_PASSWORD'),
    )
    psql_db.connect()
