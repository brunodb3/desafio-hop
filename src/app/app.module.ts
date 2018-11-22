// app.module.ts
//  - app module declaration, angular's first module to load, where we will load everything else
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// importing main app files
import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

// importing custom modules
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

// creating the module
@NgModule({
  declarations: [
    // custom components
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,

    // custom modules
    CoreModule,
    SharedModule,

    // routing module
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // component to bootstrap (first component to load)
    AppComponent
  ]
})
export class AppModule { }
