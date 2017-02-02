// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/dist/zone-testing';
=======
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
>>>>>>> b72a69f (Update dependencies (#20))
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

<<<<<<< HEAD
=======
// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

>>>>>>> b72a69f (Update dependencies (#20))
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
<<<<<<< HEAD
=======
// Finally, start Karma to run the tests.
__karma__.start();
>>>>>>> b72a69f (Update dependencies (#20))
