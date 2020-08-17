import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {TermsComponent} from './terms/terms.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FaqComponent} from '@app/modules/general/faq/faq.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    TermsComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    TermsComponent
  ]
})
export class GeneralModule {
}
