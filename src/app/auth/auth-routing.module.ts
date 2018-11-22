// auth.routing.ts
//  - auth module routing declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing custom components
import { LoginComponent } from '@app/auth/login/login.component';

// creating the routes
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

// creating the module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
