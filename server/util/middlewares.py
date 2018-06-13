from peewee import PostgresqlDatabase, OperationalError

from api.users.model import User


async def handle_request(request):
    global psql_db
    psql_db = PostgresqlDatabase(
        database='assp',
        host='localhost',
        user='nirgalon',
        password=''
    )
    psql_db.connect()

    # Create tables.
    try:
        psql_db.create_tables([User])
    except OperationalError as e:
        print(e)


async def handle_response(request, response):
    if not psql_db.is_closed():
        psql_db.close()
