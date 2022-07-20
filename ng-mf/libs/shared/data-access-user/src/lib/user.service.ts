import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly isUserLoggedIn = new BehaviorSubject(false);

  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.login();
    }
  }

  private login() {
    this.isUserLoggedIn.next(true);
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}
