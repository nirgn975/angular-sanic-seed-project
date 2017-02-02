

# An opinionated Angular - Django cluster

The `server` directory contain a simple [Django](https://www.djangoproject.com/) app that expose an `api` of Django `users` with [Django REST framework](http://www.django-rest-framework.org/). The `client` directory contain an [Angular](https://angular.io/) simple app, built with [Angular-CLI](https://github.com/angular/angular-cli), [ngrx](https://github.com/ngrx) to handle state, [material2](https://github.com/angular/material2) as a design library, have service worker, and ready to `AOT` compilation. The simple Angular app show the users from the Django api.

The repo is a production ready app, that uses `nginx` to serve static files (the client app and static files from the server), and `gunicorn` for the server (python) stuff. All the parts are in a separate [Docker](https://www.docker.com/) containers and we use [kubernetes](https://kubernetes.io/) to manage them.

## Pre Requirements
1. install [docker](https://www.docker.com/).
2. Don't know yet.

## Installation
Automatic installation of the project with docker, for development.

1. Run `$ docker-compose up` to build the docker images and run them.
3. Open the browser at [http://localhost:8000](http://localhost:8000) to see your Django (server) app.
3. Open the browser at [http://localhost:4200](http://localhost:4200) to see your Angular (client) app.

If you want to install the project manually, go to the `/client` or `/server` directories and read the `README` file.

## Our Stack
* [Angular 2.x](https://angular.io/)
* [Django 1.9.x](https://www.djangoproject.com/)
* [PostgreSQL](http://www.postgresql.org/)

## Contribute
Just fork and do a pull request (;

## License
MIT
