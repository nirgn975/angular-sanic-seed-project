from sanic import Sanic
from sanic.response import json
from sanic_cors import CORS

from api.users.routes import users_routes
from util.config import connect_to_db
from util.seed import seed_db

# Start the app and load environment variables.
app = Sanic(load_env=True)
app.config.from_envvar('ENV_VARS')
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
    app.run(host='0.0.0.0', port=8000)
