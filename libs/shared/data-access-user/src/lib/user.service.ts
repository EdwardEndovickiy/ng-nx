import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly isUserLoggedIn = new BehaviorSubject(false);

  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor(private router: Router) {}

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.login();
    }
  }

  private login() {
    this.isUserLoggedIn.next(true);

    this.router.navigate(['/']);
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}
