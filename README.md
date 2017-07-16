# An opinionated Angular - Django RESTful cluster

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Donate][donate-image]][donate-url]

The `server` directory contain a simple [Django](https://www.djangoproject.com/) app that expose an `api` of Django `users` with [Django REST framework](http://www.django-rest-framework.org/). The `client` directory contain an [Angular](https://angular.io/) simple app, built with [Angular-Cli](https://github.com/angular/angular-cli), [ngrx](https://github.com/ngrx) to handle state, [Angular Material](https://github.com/angular/material2) as a design library, have service worker, and ready to `AOT` compilation. The simple Angular app show the users from the Django api.

The repo is a production ready app, that uses `nginx` to serve static files (the client app and static files from the server), and `gunicorn` for the server (python) stuff. All the parts are in a separate [Docker](https://www.docker.com/) containers and we use [Docker Swarm](https://docs.docker.com/engine/swarm/) to manage them.

We use [ELK Stack](https://www.elastic.co/products) for logging. The `server` and the `client` logs sent to logstash, and saved in elasticsearch. There is also a kibana instance to check and analyze all the logs.

## Pre Requirements

1. install [docker](https://www.docker.com/).

## Installation

Automatic installation of the project with docker, for development.

1. In `client` directory run `docker build -t client .` to build the Docker image.
2. In `server` directory run `docker build -t server .` to build the Docker image.
3. To create a swarm `docker swarm init`.
4. Run `docker stack deploy --compose-file=docker-compose.yml prod`
5. Open the browser at [http://localhost](http://localhost) to see your Angular (client) app.
6. Open the browser at [http://localhost:8000](http://localhost:8000) to see your Django (server) app.
7. Open the browser at [http://localhost:5601](http://localhost:5601) to see Kibana and check your logs.

**If you want to install the project manually, go to the `/client` or `/server` directories and read the `README` file.**

## Our Stack

* [Angular](https://angular.io/)
* [Django](https://www.djangoproject.com/)
* [PostgreSQL](http://www.postgresql.org/)
* [Docker](https://www.docker.com/)

**Tools we use**

  * [Angular Material](https://material.angular.io/)
  * [ngrx](https://github.com/ngrx)
  * [Django REST framework](http://www.django-rest-framework.org/)
  * [django-admin-honeypot](http://django-admin-honeypot.readthedocs.io/en/latest/)
  * [ELK Stack](https://www.elastic.co/products)
  * [Docker Swarm](https://docs.docker.com/engine/swarm/)

## Tests

There is already tests for the `server` and the `client`, we currently at **+90** percent coverage.

We also write some tests for doing load test with [locust](http://locust.io/), you can find it under `server/stress_tests/`. To do a load test just install locust and write

```
locust --host=http://localhost
```

Then open up Locust’s web interface [http://localhost:8089](http://localhost:8089).

## Rolling Updates

To update any of the containers that are in a service with a new image just create a new image, for example

```
docker build -t server:v2 .
```

And then update the service with the new image

```
docker service update --image server:v2 prod_server
```

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
