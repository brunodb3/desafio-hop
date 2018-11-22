// shared.module.ts
//  - shared module declaration, contains components that don’t import and inject services from
//  core or other features in their constructors
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material (https://material.angular.io)
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';

// creating the module
@NgModule({
  imports: [
    // angular modules
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    // angular material
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  declarations: [
    // custom components
  ],
  exports: [
    // angular modules
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    // angular material
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule

    // custom components
  ]
})
export class SharedModule {}
