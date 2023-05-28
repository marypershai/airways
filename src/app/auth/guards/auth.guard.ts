import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.authService.getToken();

    if (token) {
      return true;
    }

    const returnUrl = state.url || '';
    this.authService.openAuthModal(AuthLayoutComponent, returnUrl);
    return false;
  }
}
