# Client

The front end (client) side of the project written in Angular, with Angular-CLI, ngrx, and material2.

## Prerequisites

* Install [Angular-cli](https://github.com/angular/angular-cli)
* Install [npm](https://nodejs.org/en/)

## Manual Installation

1. Run `npm install` to install dependencies
2. Run `npm start` to fire up the dev server
3. Open browser to [http://localhost:4200](http://localhost:4200)

## Tests

* Run `npm run lint` to check for TSLint mistakes
* Run `npm test` to execute the unit tests via Karma
* Run `npm run e2e` to execute the end-to-end tests via Protractor

## Deploy

1. Run `ng build -prod -aot` to build the project
2. Run `npm run sw` to generate the service worker file (in dist directory)
