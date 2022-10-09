<<<<<<< HEAD
## Server

The server (backend) side of the project written [Python](https://www.python.org/) using [Sanic](https://github.com/channelcat/sanic).
=======
## server

The server (backend) side of the project written [Python](https://www.python.org/) using [Django 1.10.5](https://www.djangoproject.com/), [Django REST framework](http://www.django-rest-framework.org/).
>>>>>>> b72a69f (Update dependencies (#20))

## Prerequisites

* Install [Python 3.x](https://www.python.org/)
<<<<<<< HEAD
* Install [Pipenv](https://github.com/pypa/pipenv)
=======
>>>>>>> b72a69f (Update dependencies (#20))
* Install [Pip](https://pypi.python.org/pypi/pip)

## Manual Installation

<<<<<<< HEAD
1. Create a file called `.env` at the root of the project and write the configurations of the server there. Here is an example of the `.env` file:
```
DB_URI = 'postgres://nirgalon:@localhost:5432/assp'
DB_NAME = 'assp'
DB_USER = 'nirgalon'
DB_PASSWORD = 'nirgalon'
DB_PORT = '5432'
HOST = '0.0.0.0'
PORT = '8000'
LOG_LEVEL = 'info'
ENV = 'development'
```
2. Create a virtual environment with `pipenv install` at the root of the project.
3. Get in to the virtual environment with `pipenv shell`.
4. Run the server with the `.env` file `python main.py`
5. Hit [http://localhost:8000](http://localhost:8000) with Postman.

## Tests

To run all tests `python -m unittest`
=======
1. `cd server/config` then `cp local_settings.template local_settings.py` and modify it by your local settings
2. Install requirements with `pip install -r requirements.txt`
3. Migrate the data with `python manage.py migrate`
4. Run the server with `python manage.py runserver`
5. Open the browser at [http://localhost:8000](http://localhost:8000)

## Tests

* Run `pycodestyle --show-source --max-line-length=119 --show-pep8 server;` to check for lint mistakes (by PEP8)
* Run `python manage.py test` to execute the unit tests

## Deploy

1. Not Yet
>>>>>>> b72a69f (Update dependencies (#20))
