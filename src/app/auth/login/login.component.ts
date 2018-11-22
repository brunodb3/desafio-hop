// login.component.ts
//  - login component declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

// custom modules
import { AuthService } from '@app/auth/auth.service';

// creating the component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // component variable declarations
  public loginForm: FormGroup;
  private componentName = 'login';

  constructor(
    public meta: Meta,
    public title: Title,
    public router: Router,
    public snackBar: MatSnackBar,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {
    // creating the message form validation group
    this.loginForm = formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(256)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(256)
        ]
      ]
    });

    // adding title
    title.setTitle('Desafio Hop - Login');

    // adding meta tags to the component
    meta.addTags([
      {
        name: 'author',
        content: 'Bruno Duarte Brito'
      },
      {
        name: 'keywords',
        content: 'desafio'
      },
      {
        name: 'description',
        content: 'Desafio Hop por Bruno Duarte Brito'
      }
    ]);
  }

  // fires when component is ready
  ngOnInit(): void {
    // checking if there's an user logged in
    if (this.authService.isLoggedIn()) {
      // navigating to the chat route
      this.router.navigate(['/chat']);
    }
  }

  // submits the login request to the services
  submitLogin(username: string, password: string): void {
    // resetting the login form
    this.loginForm.reset();

    // sending the login request to the API
    this.authService.sendLogin(username, password).subscribe(
      response => {
        // saving the username
        this.authService.saveUsername(username);

        // saving the token
        this.authService.saveToken(response.token);

        // showing snackbar notification
        this.snackBar.open(`Bem vindo(a) ${username}!`);
        this.router.navigate(['/chat']);
      },
      response => {
        // showing snackbar notification
        this.snackBar.open(response.error.message);
      }
    );
  }
}
