import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {
  constructor(public authService: AuthService) {}

  public onTabSelectionChanged(index: number): void {
    this.authService.selectedTabIndex$.next(index);
  }
}
