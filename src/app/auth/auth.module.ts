// auth.module.ts
//  - auth module declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';

// importing custom components
import { LoginComponent } from '@app/auth/login/login.component';

// importing custom modules
import { SharedModule } from '@app/shared';
// import { AuthService } from '@app/auth/auth.service';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';

// creating the module
@NgModule({
  imports: [
    // custom modules
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    // custom components
    LoginComponent
  ],
  providers: [
    // custom providers
    // ChatService
  ]
})
export class AuthModule {}
