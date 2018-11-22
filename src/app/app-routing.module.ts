// app-routing.module.ts
//  - app routing module declaration, where we declare the main routes
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// creating the routes
const routes: Routes = [
  {
    path: 'chat',
    loadChildren: '@app/chat/chat.module#ChatModule'
  },
  {
    path: 'auth',
    loadChildren: '@app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

// creating the module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
