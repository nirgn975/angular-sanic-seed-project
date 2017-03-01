# An opinionated Angular - Django RESTful cluster

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Donate][donate-image]][donate-url]

The `server` directory contain a simple [Django](https://www.djangoproject.com/) app that expose an `api` of Django `users` with [Django REST framework](http://www.django-rest-framework.org/). The `client` directory contain an [Angular](https://angular.io/) simple app, built with [Angular-Cli](https://github.com/angular/angular-cli), [ngrx](https://github.com/ngrx) to handle state, [Angular Material](https://github.com/angular/material2) as a design library, have service worker, and ready to `AOT` compilation. The simple Angular app show the users from the Django api.

The repo is a production ready app, that uses `nginx` to serve static files (the client app and static files from the server), and `gunicorn` for the server (python) stuff. All the parts are in a separate [Docker](https://www.docker.com/) containers and we use [kubernetes](https://kubernetes.io/) to manage them.

## Pre Requirements

1. install [docker](https://www.docker.com/).
2. Don't know yet.

## Installation

Automatic installation of the project with docker, for development.

1. In `client` directory run `docker build -t client .` to build the Docker image.
2. Run ```docker run -dit -v `pwd`:/usr/src -p 4200:4200 --name=client-con client``` to run a container from that image.
3. Open the browser at [http://localhost:4200](http://localhost:4200) to see your Angular (client) app.
4. In `server` directory run `docker build -t server .` to build the Docker image.
5. Run ```docker run -dit -v `pwd`:/usr/src -p 8000:8000 --name=server-con server``` to run a container from that image.
6. Open the browser at [http://localhost:8000](http://localhost:8000) to see your Django (server) app.

If you want to install the project manually, go to the `/client` or `/server` directories and read the `README` file.

## Our Stack

* [Angular](https://angular.io/)
* [Django](https://www.djangoproject.com/)
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
[dependencyci-image]: https://dependencyci.com/github/nirgn975/Angular-Django-cluster/badge
[dependencyci-url]: https://dependencyci.com/github/nirgn975/Angular-Django-cluster
[donate-image]: https://img.shields.io/badge/Donate-PayPal-lightgrey.svg
[donate-url]: https://www.paypal.me/nirgn/2
