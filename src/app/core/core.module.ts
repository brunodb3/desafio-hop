// core.module.ts
//  - core module declaration, contains all services which have to have one and only one instance
//  per application (singleton services)
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

// creating the module
@NgModule({
  imports: [
    // 3rd party libraries
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    // custom services
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // checking if CoreModule has been imported already (should only be imported by the AppModule)
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
