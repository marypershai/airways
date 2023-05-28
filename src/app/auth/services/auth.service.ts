import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ComponentType } from '@angular/cdk/overlay';
import { User } from '../../shared/models/user.model';
import { DialogService } from '../../core/services/dialog.service';
import { LoginForm } from '../../shared/models/login-form.model';
import { UserData } from '../../shared/models/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public returnUrl!: string;
  public userData$ = new BehaviorSubject<UserData | null>(null);
  public selectedTabIndex$ = new BehaviorSubject<number>(0);
  private localStorageItemName = 'token';

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private http: HttpClient
  ) {}

  public setToken(token: string): void {
    localStorage.setItem(this.localStorageItemName, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.localStorageItemName);
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>('users', user);
  }

  public openAuthModal(
    component: ComponentType<unknown>,
    returnUrl?: string
  ): void {
    this.returnUrl = returnUrl ?? '';
    this.dialogService.openDialog(component);
  }

  public login(form: LoginForm): Observable<LoginForm> {
    return this.http.post<LoginForm>('login', form);
  }

  public logout(): void {}
}
