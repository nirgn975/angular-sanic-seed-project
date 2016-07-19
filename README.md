[![Build Status](https://travis-ci.org/nirgn975/Angular2-Django-cluster.svg?branch=master)](https://travis-ci.org/nirgn975/Angular2-Django-cluster)

# Angular 2.x - Django Cluster
The repo contains a `server` directory that contains an hello world app in [Django](https://www.djangoproject.com/), and a `client` directory which contains an [Angular (version 2.x)](https://angular.io/) hello world app (that has build with [Angular-CLI](https://github.com/angular/angular-cli) tool).

## Pre Requirements
1. install [docker](https://www.docker.com/).
2. install [docker-compose](https://docs.docker.com/compose/install/).

## Installation
Automatic installation of the project with docker, for development.

1. Run `$ docker-compose up` to build the docker images and run them.
3. Open the browser at [http://localhost:80](http://localhost:80) to see your Django (server) app.
3. Open the browser at [http://localhost:81](http://localhost:81) to see your Angular (client) app.

If you want to install the project manually, go to the `/client` or `/server` directories and read the `README` file.

## Our Stack
* [Angular 2.x](https://angular.io/)
* [Django 1.9.x](https://www.djangoproject.com/)
* [PostgreSQL](http://www.postgresql.org/)
* [Nginx](https://www.nginx.com/resources/wiki/)

## Contribute
Just fork and do a pull request (;

## License
MIT
