import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermsComponent} from '@app/modules/general/terms/terms.component';
import {NotFoundComponent} from '@app/modules/general/not-found/not-found.component';
import {LayoutsFullComponent} from '@app/layouts/layouts-full/layouts-full.component';
import {LayoutsMainComponent} from '@app/layouts/layouts-main/layouts-main.component';
import {AuthGuard} from '@app/modules/auth/auth.guard';
import {FaqComponent} from '@app/modules/general/faq/faq.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutsMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '',
    component: LayoutsFullComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'terms-and-conditions',
        component: TermsComponent,
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
