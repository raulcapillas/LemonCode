import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { namesRoutes } from '../routing.module';
import ls from 'localstorage-slim';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username: string = 'master@lemoncode.net';
  private password: string = '12345678';
  private key: string = 'my-mini-app-key';

  constructor(private _router: Router) {}

  public login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      ls.set(this.key, `${username}-${password}-${moment()}`, {
        encrypt: true,
        ttl: 900,
      }); // 15 min
      return true;
    }
    return false;
  }

  public logout(): void {
    ls.set(this.key, null);
    this._router.navigate([`/${namesRoutes.login}`]);
  }

  public isLogged(): boolean {
    const logged: string | null = ls.get(this.key, { decrypt: true });
    return this.logalStorageValidation(logged);
  }

  public getUsername(): string {
    return this.username;
  }

  private logalStorageValidation(value: string | null): boolean {
    if (value != null) {
      const [username, password, date] = value.split('-');
      var duration = moment.duration(moment().diff(date));

      if (
        username === this.username &&
        password === this.password &&
        duration.asMinutes() < 15
      ) {
        return true;
      }
    }

    return false;
  }
}
