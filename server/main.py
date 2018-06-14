from sanic import Sanic
from sanic.response import json
from sanic_cors import CORS

from api.users.routes import users_routes
from util.middlewares import handle_request, handle_response

# Start the app and load environment variables.
app = Sanic(load_env=True)
app.config.from_envvar('ENV_VARS')
CORS(app)


# root route
@app.route('/')
async def root(request):
    return json({}, status=200)

# Register all blueprints.
app.blueprint(users_routes)

# Register all middlewares.
app.register_middleware(handle_request, 'request')
app.register_middleware(handle_response, 'response')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
