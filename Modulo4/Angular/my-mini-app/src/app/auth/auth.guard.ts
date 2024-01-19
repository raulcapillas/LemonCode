import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { namesRoutes } from '../routing.module';

export const GuestAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthService).isLogged()
    ? true
    : inject(Router).navigate([`/${namesRoutes.login}`]);
};

export const LoggedAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return !inject(AuthService).isLogged()
    ? true
    : inject(Router).navigate([`/${namesRoutes.dashboard}`]);
};
