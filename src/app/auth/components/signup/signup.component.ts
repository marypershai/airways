import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ControlsOf, FormGroupTyped } from '../../../utils/form.util';
import { User } from '../../../shared/models/user.model';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import phones from '../../../constants/phone-codes.json';
import { CountryCode } from '../../../shared/models/country-code.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroupTyped<User>;
  public phoneCodes!: CountryCode[];
  public isAgreementChecked: boolean = false;
  public defaultCountryCode!: string;
  public errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuthLayoutComponent>,
    private authService: AuthService
  ) {
    this.phoneCodes = phones;
  }

  public ngOnInit(): void {
    this.buildSignupForm();
  }

  public onSubmitForm(): void {
    this.authService.register(this.signupForm.getRawValue()).subscribe(
      () => {
        this.authService.selectedTabIndex$.next(0);
      },
      (error) => {
        this.errorMessage = error?.error.message || 'User has already exists';
      }
    );
  }

  public get isSubmitButtonDisabled(): boolean {
    return this.signupForm.invalid || !this.isAgreementChecked;
  }

  public onAgreementChanged(): void {
    this.isAgreementChecked = !this.isAgreementChecked;
  }

  public prefillData(): void {
    this.signupForm.setValue({
      email: 'test@mail.ru',
      password: '123456',
      firstName: 'test',
      lastName: 'test',
      birthDate: new Date(),
      sex: 'male',
      phoneNumber: '123456789',
      citizenship: 'Belarus',
    });

    this.defaultCountryCode = '+375';
  }

  private buildSignupForm(): void {
    this.signupForm = this.fb.group<ControlsOf<User>>({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^([a-zA-Z]+|\d+)$/),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^([a-zA-Z]+|\d+)$/),
        ]),
      ],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      citizenship: ['', Validators.required],
    });
  }
}
