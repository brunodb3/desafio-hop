// auth.guard.ts
//  - auth guard declaration
// -----------------------------------------------------------------------------

// importing 3rd party libraryes
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

// importing custom modules
import { AuthService } from '@app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // checking if there's an user logged in (auth-protected routes can be activated)
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // navigating back to the auth route
    this.router.navigate(['/auth']);
    return false;
  }
}
