import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {RouterModule} from '@angular/router';

// Routes
const routes = [
  {
    path: '',
    component: ContactUsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactUsRoutingModule {
}
