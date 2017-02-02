## server

The server (backend) side of the project written [Python](https://www.python.org/) using [Django 1.10.5](https://www.djangoproject.com/), [Django REST framework](http://www.django-rest-framework.org/).

## Prerequisites

* Install [Python 3.x](https://www.python.org/)
* Install [Pip](https://pypi.python.org/pypi/pip)

## Manual Installation

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
