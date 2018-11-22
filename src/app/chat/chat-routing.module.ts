// chat.routing.ts
//  - chat module routing declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing custom components
import { HomeComponent } from '@app/chat/home/home.component';

// importing guards
import { AuthGuard } from '@app/auth/auth.guard';

// creating the routes
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  }
];

// creating the module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ChatRoutingModule { }
