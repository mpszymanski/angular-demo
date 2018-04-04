import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private cookieService:CookieService) {
    if(this.cookieService.get('auth'))
      this.loggedIn.next(true);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  attemptLogin(credentials) {
    return new Promise((resolve, reject) => {
      if(credentials.username == 'user' && credentials.password == 'secret') {
        this.cookieService.put('auth', btoa('token'));
        this.loggedIn.next(true);
        resolve();
      } else {
        reject();
      }
    });
  }

  logout() {
    this.loggedIn.next(false);
    this.cookieService.remove('auth');
  }
}
