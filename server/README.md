## Server

The server (backend) side of the project written [Python](https://www.python.org/) using [Sanic](https://github.com/channelcat/sanic).

## Prerequisites

* Install [Python 3.x](https://www.python.org/)
* Install [Pipenv](https://github.com/pypa/pipenv)
* Install [Pip](https://pypi.python.org/pypi/pip)

## Manual Installation

1. Create a file called `.env` at the root of the project and write the configurations of the server there. Here is an example of the `.env` file:
```
DB_URI = 'mongodb://localhost:27017/assp'
JWT = 'ASSP'
PORT = '8000'
LOG_LEVEL = 'info'
ENV = 'development'
```
2. Create a virtual environment with `pipenv install` at the root of the project.
3. Get in to the virtual environment with `pipenv shell`.
4. Run the server with the `.env` file `ENV_VARS=.env python main.py`
5. Hit [http://localhost:8000](http://localhost:8000) with Postman.

## Tests

Not Yet..
