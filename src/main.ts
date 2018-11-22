import 'hammerjs';
// main.ts
//  - main file for handling app bootstrap
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// importing custom modules
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// checking for environment
if (environment.production) {
  // enabling production mode
  enableProdMode();
}

// bootstrapping application
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
