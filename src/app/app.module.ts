import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsNavbarComponent} from '@app/layouts/layouts-navbar/layouts-navbar.component';
import {LayoutsFullComponent} from '@app/layouts/layouts-full/layouts-full.component';
import {LayoutsMainComponent} from '@app/layouts/layouts-main/layouts-main.component';
import {LayoutsFooterComponent} from '@app/layouts/layouts-footer/layouts-footer.component';
import {AuthModule} from '@app/modules/auth/auth.module';
import {SharedModule} from '@app/modules/shared/shared.module';
import {AuthGuard} from '@app/modules/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsNavbarComponent,
    LayoutsFullComponent,
    LayoutsMainComponent,
    LayoutsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
