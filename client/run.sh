#!/usr/bin/env bash

#Disable npm progress bar - for speed.
npm set progress=false

# Install Angular CLI tool.
npm install -g angular-cli typings --silent

# Install npm dependencies.
npm install --silent
npm run postinstall

# Start the npm server
ng serve
