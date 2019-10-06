from peewee import PostgresqlDatabase


def connect_to_db():
    global psql_db
    psql_db = PostgresqlDatabase(
        database='assp',
        host='localhost',
        port=5432,
        user='nirgalon',
        password=''
    )
    psql_db.connect()
