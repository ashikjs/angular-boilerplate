import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from '@app/modules/auth/forgot-password/forgot-password.component';
import {RegisterComponent} from '@app/modules/auth/register/register.component';

// Routes
const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule {
}
