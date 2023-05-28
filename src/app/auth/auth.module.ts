import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    SignupComponent,
    SocialButtonsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
  ],
})
export class AuthModule {}
