# An Angular - Django Project Seed

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Donate][donate-image]][donate-url]

This repo is a production ready seed project. The app shows a list of users.

## Structure

* The `client` service is a build of the `client` directory. It contain an [Angular](https://angular.io/) app, built with [Angular-Cli](https://github.com/angular/angular-cli), [ngrx](https://github.com/ngrx) to handle state, [Angular Material](https://github.com/angular/material2) as a design library, have service worker, and `AOT` compiled. The app shows the users from the Django api.
* The `server` service is a build of the `server` directory. It contain a simple [Django](https://www.djangoproject.com/) app that expose an `api` of Django `users` with [Django REST framework](http://www.django-rest-framework.org/). The Python serve through a [gunicorn](http://gunicorn.org/) server installed in the container.
* There is a `postgres` service for the Django database. The `database` directory contains the automatic backup script.
* There is an `nginx` service to serve static files (the client app).
* There is an `haproxy` service to get all the HTTP requests and do load balancing between the containers in the services.
* There are a separate containers for the [ELK Stack](https://www.elastic.co/products) for logging. The `server` and the `client` logs sent to logstash, and saved in elasticsearch. There is also a kibana instance to check and analyze all the logs.
* There is a `visualizer` container to visualize where is each container is located at (on which server).

All the parts are in a separate [Docker](https://www.docker.com/) containers and we use [Docker Swarm](https://docs.docker.com/engine/swarm/) to manage them.

## Pre Requirements

1. install [docker](https://www.docker.com/).

## Installation

Automatic installation of the project with docker, for development.

1. In `client` directory run `docker build -t client .` to build the Docker image.
2. In `server` directory run `docker build -t server .` to build the Docker image.
3. To create a swarm `docker swarm init`.
4. Download all docker images:
  * `docker pull dockercloud/haproxy`  
  * `docker pull postgres`  
  * `docker pull dockersamples/visualizer:stable`  
  * `docker pull elasticsearch:5.4.3`  
  * `docker pull kibana:5.4.3`  
  * `docker pull logstash:5.4.3`  
5. Run `docker stack deploy --compose-file=docker-compose.yml prod`
6. Open the browser at [http://localhost](http://localhost) to see your Angular (client) app.
7. Open the browser at [http://localhost:8000](http://localhost:8000) to see your Django (server) app.
8. Open the browser at [http://localhost:8080](http://localhost:8080) to see the visualizer.
9. Open the browser at [http://localhost:5601](http://localhost:5601) to see Kibana and check your logs.

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

## Django Admin

  * When install the project with docker, there is an `entrypoint.sh` script that runs in the `server` container. It'll migrate the database and create a new super user with a username `admin` and a password `pass`.
  * We use [django-admin-honeypot](https://github.com/dmpayton/django-admin-honeypot) to fake the default Django admin login screen to log and notify admins of attempted unauthorized access. So the real Django admin login screen will be under `/secret-admin`.
  * We also use [django-flat-responsive](https://github.com/elky/django-flat-responsive) to make the Django admin screens responsive to mobile.

## Tests

There is already tests for the `server` and the `client`, we currently at **+90** percent coverage.

To run the `client` tests and lint run the commands below in the `client` directory.

```
npm run lint
npm run test
```

To run the `server` tests and lint run the commands below in the `server` directory.

```
pycodestyle --show-source --max-line-length=120 --show-pep8 .;
python manage.py test
```

## Load Tests

We also write some tests for doing load test with [locust](http://locust.io/), you can find it under `server/locustfile.py`.

To do a load test just install locust (it's in the `requirements.txt` file) go to `server` directory and run

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

## Database Backups

Each day a backup of the PostgreSQL database will be created. The daily backups are rotated weekly, so maximum 7 backup files will be at the daily directory at once.

Each Saturday morning a weekly backup will be created at the weekly directory. The weekly backups are rotated on a 5 week cycle.

Each month at the 1st of the month a monthly backup will be created at the monthly directory. Monthly backups are **NOT** rotated

The backups are saved at `/var/backups/postgres` at the host machine via a shared volume. It can be configured in the `docker-compose.yml` at `volumes` section of the `database` service.

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
