# An opinionated Angular - Django cluster

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Python 3][python3-image]][python3-url] [![Updates][updates-image]][updates-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Donate][donate-image]][donate-url]

The `server` directory contain a simple [Django](https://www.djangoproject.com/) app that expose an `api` of Django `users` with [Django REST framework](http://www.django-rest-framework.org/). The `client` directory contain an [Angular](https://angular.io/) simple app, built with [Angular-Cli](https://github.com/angular/angular-cli), [ngrx](https://github.com/ngrx) to handle state, [Angular Material](https://github.com/angular/material2) as a design library, have service worker, and ready to `AOT` compilation. The simple Angular app show the users from the Django api.

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

* [Angular 2.3](https://angular.io/)
* [Django 1.10.5](https://www.djangoproject.com/)
* [PostgreSQL](http://www.postgresql.org/)
* [Docker](https://www.docker.com/)

**Tools we use**

  * [Angular Material](https://material.angular.io/)
  * [ngrx](https://github.com/ngrx)
  * [Django REST framework](http://www.django-rest-framework.org/)
  * [kubernetes](https://kubernetes.io/)

## Contribute

Just fork and do a pull request (;

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/nirgn975/Angular-Django-cluster/blob/master/LICENSE
[travis-image]: https://travis-ci.org/nirgn975/Angular-Django-cluster.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/Angular-Django-cluster
[codecov-image]: https://codecov.io/gh/nirgn975/Angular-Django-cluster/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/nirgn975/Angular-Django-cluster
[python3-image]: https://pyup.io/repos/github/nirgn975/angular-django-cluster/python-3-shield.svg
[python3-url]: https://pyup.io/repos/github/nirgn975/angular-django-cluster/
[updates-image]: https://pyup.io/repos/github/nirgn975/angular-django-cluster/shield.svg
[updates-url]: https://pyup.io/repos/github/nirgn975/angular-django-cluster/
[dependencyci-image]: https://dependencyci.com/github/nirgn975/Angular-Django-cluster/badge
[dependencyci-url]: https://dependencyci.com/github/nirgn975/Angular-Django-cluster
[donate-image]: https://img.shields.io/badge/Donate-PayPal-lightgrey.svg
[donate-url]: https://www.paypal.me/nirgn/2
