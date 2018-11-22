// chat.service.ts
//  - chat service declaration
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

// importing environment
import { environment } from '@env/environment';

// importing custom modules
import { AuthService } from '@app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  /**
   * @description Sends a message to the API provided by HOP for this challenge
   * @param message Message to send
   */
  sendMessage(message: string, context: object): Observable<any> {
    // creating the HTTP Options (with headers)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getToken()
      })
    };

    // creating the request body
    const requestBody = {
      context,
      input: {
        text: message
      }
    };

    // returning the POST request
    return this.http.post(
      `${environment.hopApi}/api/message`,
      requestBody,
      httpOptions
    );
  }
}
