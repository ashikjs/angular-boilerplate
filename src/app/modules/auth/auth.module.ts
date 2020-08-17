import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth.routing.module';
import {GeneralModule} from '../general/general.module';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from '@app/modules/auth/forgot-password/forgot-password.component';
import {RegisterComponent} from '@app/modules/auth/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    GeneralModule
  ]
})
export class AuthModule {
}
