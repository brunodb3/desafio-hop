// auth.service.ts
//  - auth service declaration
// -----------------------------------------------------------------------------

// importing 3rd party libraries
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

// importing environment
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * @description Sends a the login to the API provided by HOP for this challenge
   * @param username Username to send
   * @param password Password to send
   */
  sendLogin(username: string, password: string): Observable<any> {
    // creating the HTTP Options (with headers)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // creating the request body
    const requestBody = {
      username,
      password
    };

    console.log(requestBody);

    // returning the POST request
    return this.http.post(
      `${environment.hopApi}/api/auth`,
      requestBody,
      httpOptions
    );
  }

  /**
   * @description Returns the user token for authentication
   * @returns User token
   */
  getToken() {
    return localStorage.getItem('auth-token');
  }

  /**
   * @description Saves the user token for authentication in Local Storage
   */
  saveToken(token: string) {
    localStorage.setItem('auth-token', token);
  }

  /**
   * @description Returns the current username
   * @returns Current username
   */
  getUsername() {
    return localStorage.getItem('auth-username');
  }

  /**
   * @description Saves the username for authentication in Local Storage
   */
  saveUsername(username: string) {
    localStorage.setItem('auth-username', username);
  }

  /**
   * @description Returns whether there's an user logged in
   * @returns Whether there's an user logged in
   */
  isLoggedIn() {
    return this.getToken() ? true : false;
  }

  /**
   * @description Removes the Local Storage references, logging the user out
   */
  logout() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-username');
  }
}
