<<<<<<< HEAD
import 'hammerjs';

=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
>>>>>>> b72a69f (Update dependencies (#20))
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
<<<<<<< HEAD
=======
import { AppModule } from './app/app.module';
>>>>>>> b72a69f (Update dependencies (#20))

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
