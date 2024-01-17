import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { namesRoutes } from '../routing.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = 'master@lemoncode.net';
  private password: string = '12345678';
  public isLoggedIn: boolean = false;

  constructor(private _router: Router) {}

  public login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  public logout(): void {
    this.isLoggedIn = false;
    this._router.navigate([`/${namesRoutes.login}`]);
  }

  public isLogged(): boolean {
    return this.isLoggedIn;
  }

  public getUsername(): string {
    return '';
  }
}
