<img src="https://raw.githubusercontent.com/nirgn975/Angular-Django-Seed-Project/master/art/angular-django-seed-project.png" />

[![license][license-image]][license-url] [![GitHub release][github-image]][github-url] [![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Codacy Badge][codacy-image]][codacy-url] [![Maintenance][maintenance-image]][maintenance-url] [![Donate][donate-image]][donate-url]

This repo is a production ready seed project. The app shows a list of users.

## Structure

* The `client` contain an [Angular](https://angular.io/) app, built with [Angular-Cli](https://github.com/angular/angular-cli), and [ngrx](https://github.com/ngrx) to handle state, [Angular Material](https://github.com/angular/material2) as a design library, and have service worker, and `AOT` compiled. The app shows the users from the Sanic api.
* The `server` contain a simple [Sanic](https://sanic.readthedocs.io) app that expose an `api` of `users`. The Python serve through a [gunicorn](http://gunicorn.org/) server installed in the container.
* There is a `postgres` service for the database. The `database` directory contains the automatic backup script.
* All the logs are going to `stdout` and can be collected through any service.
* There are built in test that configured to run on `travis-ci`, and a code coverage analysis via `codecov`.

The `client` app is built via the cloud build CI on GCP and deployed to the GCP `storage`.
The `server` app is built via the cloud build CI as a docker image and deployed to a `GKE cluster` on GCP (managed by Kubernetes).
The PostgreSQL `database` is built via the cloud build CI as a docker image and deployed to a `GKE cluster` on GCP (managed by Kubernetes).

## Production Installation

Deploy the `client` app:
1. Create a storage bucket with the name of the Domain you have.
2. Create a cloud build trigger with the parameters in the [screenshot](art/client-trigger.jpg) (change the `_REGION_NAME` to the location of the bucket you created in the previous step).
3. Now you can deploy your `client` app by creating a new tag in the `v0.0.1/prod/prod` format and push it to github (`git push --tags`).

Deploy the `server` app:
1. Create a `GKE` cluster on GCP.
2. Create a cloud build trigger with the parameters in the [screenshot](art/servier-trigger.jpg) (change the `_REGION_NAME` to the location of the `GKE` cluster you created in step 1).
3. Connect to the `GKE` cluster using `gcloud container clusters get-credentials prod` and then create a `tiler` using the commands:
 1. `kubectl create serviceaccount --namespace kube-system tiller`
 2. `kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller`
 3. `kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'`
 4. `helm init --service-account tiller --upgrade`
4. Then change the `helm` permissions by navigate to `server/kubernetes` in the command line and then write `kubectl apply -f helm-permissions.yaml`.
5. Now you can deploy your `server` app by create a new tag in the `v0.0.1/prod/prod` format and push it to github (`git push --tags`).

Create a Cloud DNS record:
1. Create a Cloud DNS record on GCP. In this record you should add an `A` record to the kubernetes cluster (the server) and place there your load balancer ip address you get in the "Deploy the `server` app", and a `CNAME` record to our Storage bucket (client app) [screenshot](art/cloud_dns.jpg).

## Our Stack

* [Angular](https://angular.io/)
* [Sanic](https://www.djangoproject.com/)
* [PostgreSQL](https://sanic.readthedocs.io)
* [Docker](https://www.docker.com/)

**Tools we use**

  * [Angular Material](https://material.angular.io)
  * [ngrx](https://github.com/ngrx)
  * [Peewee](http://docs.peewee-orm.com)
  * [Kubernetes](https://kubernetes.io)
  * [Travis-CI](https://travis-ci.org)
  * [Codecov](https://codecov.io)

## Tests

There is already tests for the `server` and the `client`, we currently at **+90** percent coverage.

To run the `client` tests and lint run the commands below in the `client` directory.

```
npm run lint
npm run test
```

To run the `server` tests and lint run the commands below in the `server` directory.

```
pycodestyle --show-source --max-line-length=120 --show-pep8 .
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
[license-url]: https://github.com/nirgn975/Angular-Django-Seed-Project/blob/master/LICENSE
[github-image]: https://img.shields.io/github/release/nirgn975/Angular-Django-Seed-Project.svg
[github-url]: https://github.com/nirgn975/Angular-Django-Seed-Project/releases
[travis-image]: https://travis-ci.org/nirgn975/Angular-Django-Seed-Project.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/Angular-Django-Seed-Project
[codecov-image]: https://codecov.io/gh/nirgn975/Angular-Django-Seed-Project/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/nirgn975/Angular-Django-Seed-Project
[dependencyci-image]: https://dependencyci.com/github/nirgn975/Angular-Django-Seed-Project/badge
[dependencyci-url]: https://dependencyci.com/github/nirgn975/Angular-Django-Seed-Project
[codacy-image]: https://api.codacy.com/project/badge/Grade/cdf4939e98804872b377a4120a4f4571
[codacy-url]: https://www.codacy.com/app/nirgn975/Angular-Django-Seed-Project?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nirgn975/Angular-Django-Seed-Project&amp;utm_campaign=Badge_Grade
[maintenance-image]: https://img.shields.io/maintenance/yes/2019.svg
[maintenance-url]: https://github.com/nirgn975
[donate-image]: https://img.shields.io/badge/PayPal-Donate-lightgrey.svg
[donate-url]: https://www.paypal.me/nirgn/2
