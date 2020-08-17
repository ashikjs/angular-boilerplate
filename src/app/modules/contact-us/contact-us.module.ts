import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {SharedModule} from '../shared/shared.module';
import {ContactUsRoutingModule} from './contact-us-routing.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule {
}
