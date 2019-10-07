from os import getenv
from dotenv import load_dotenv, find_dotenv
from sanic import Sanic
from sanic.response import json
from sanic_cors import CORS

from api.users.routes import users_routes
from util.config import connect_to_db
from util.seed import seed_db

load_dotenv(find_dotenv())

# Start the app.
app = Sanic(load_env=True)
CORS(app)

# Connect to the database and seed it.
connect_to_db()
seed_db()

# root route
@app.route('/')
async def root(request):
    return json({}, status=200)

# Register all blueprints.
app.blueprint(users_routes)

if __name__ == '__main__':
    app.run(host=getenv('HOST'), port=getenv('PORT'))
