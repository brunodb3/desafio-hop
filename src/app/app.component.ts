// app.component.ts
//  - app component declaration, angular's first component to load (root component)
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { Component } from '@angular/core';

// creating the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // component variable declarations
  title = 'Desafio Hop';
}
