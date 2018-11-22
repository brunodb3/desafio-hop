// home.component.ts
//  - home component declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// custom modules
import { ChatService } from '@app/chat/chat.service';
import { AuthService } from '@app/auth/auth.service';

// creating the component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // component variable declarations
  public context = {};
  public messages = [];
  public messageForm: FormGroup;
  private componentName = 'home';

  constructor(
    public meta: Meta,
    public title: Title,
    public router: Router,
    public snackBar: MatSnackBar,
    public chatService: ChatService,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {
    // creating the message form validation group
    this.messageForm = formBuilder.group({
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(256)
        ]
      ]
    });

    // adding title
    title.setTitle('Desafio Hop');

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

  // submits a message to the services
  submitMessage(message: string): void {
    // resetting the message form
    this.messageForm.reset();

    // creating an object for the sent message (in the format of the API response)
    const sentMessage = {
      sentDate: new Date(),
      author: this.authService.getUsername(),
      output: {
        text: message
      }
    };

    // pushing the sent message to the list
    this.messages.push(sentMessage);

    // sending a message to the API
    this.chatService.sendMessage(message, this.context).subscribe(
      response => {
        // assigning the author for the API response
        response.author = 'Chatbot';
        response.sentDate = new Date();

        // pushing the received message to the list
        this.messages.push(response);

        // saving the context attribute
        this.context = response.context;
      },
      response => {
        // showing snackbar notification
        this.snackBar.open(response.error.message);
      }
    );
  }

  // logs the user out
  logout(): void {
    // logging the user out
    this.authService.logout();

    // redirecting to the login route
    this.router.navigate(['/auth']);
  }
}
