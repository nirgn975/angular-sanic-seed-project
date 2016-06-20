## Back-End
The back end (server) part of the open pension project written in [Django 1.9.x](https://www.djangoproject.com/).

## Manual Installation

1. Make sure you have Python 3.x and pip installed.
2. `cd server/config` then `cp local_settings.template local_settings.py` and modify it by your local settings.
3. Install requirements with `pip install -r requirements.txt` (located under `server` directory).
4. Migrate the data with `python manage.py migrate`.
5. Import the dummy data with `python manage.py import_data`.
6. Run the server with `python manage.py runserver`.
7. Open the browser at [http://localhost:8000](http://localhost:8000).

## Tests
Nothing yet.
