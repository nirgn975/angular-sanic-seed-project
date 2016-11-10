# Angular 2.x - Django Cluster

[![license][license-image]][license-url] [![Build Status][travis-image]][travis-url]

> The repo contains a `server` directory that contains an hello world app in [Django](https://www.djangoproject.com/), and a `client` directory which contains an [Angular (version 2)](https://angular.io/) hello world app (that has build with [Angular-CLI](https://github.com/angular/angular-cli) tool).

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

* [Angular 2.1](https://angular.io/)
* [Django 1.10.1](https://www.djangoproject.com/)
* [PostgreSQL](http://www.postgresql.org/)
* [Nginx](https://www.nginx.com/resources/wiki/)

**Tools we use**

* [Angular-CLI](https://cli.angular.io/)
* [ngrx](https://github.com/ngrx)

## Contribute

Just fork and do a pull request (;

## License

ISC © [Nir Galon](http://www.nirgn.com)

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/nirgn975/Angular2-Django-cluster/blob/master/LICENSE
[travis-image]: https://travis-ci.org/nirgn975/Angular2-Django-cluster.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/Angular2-Django-cluster
