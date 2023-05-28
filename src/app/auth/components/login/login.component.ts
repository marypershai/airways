import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ControlsOf, FormGroupTyped } from '../../../utils/form.util';
import { LoginForm } from '../../../shared/models/login-form.model';
import { AuthService } from '../../services/auth.service';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroupTyped<LoginForm>;
  public errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<AuthLayoutComponent>,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  public showHidePassword(input: HTMLInputElement): void {
    input.setAttribute(
      'type',
      input.getAttribute('type') === 'password' ? 'text' : 'password'
    );
  }

  public onSubmitForm(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(
      (token) => {
        if (!token) {
          return;
        }

        this.authService.setToken(token.toString());
        this.router.navigate([this.authService.returnUrl]).then(() => {
          this.authService.userData$.next(this.loginForm.controls.login.value);
          this.dialogRef.close();
        });
      },
      (err) => {
        this.errorMessage =
          err.error?.message || 'Login or password is invalid';
      }
    );
  }

  public prefillData(): void {
    this.loginForm.setValue({
      login: 'test@mail.ru',
      password: '123456',
    });
  }

  private buildForm(): void {
    this.loginForm = this.fb.group<ControlsOf<LoginForm>>({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
