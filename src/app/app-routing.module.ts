import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppComponent } from './app.component';

const MFE1_ROUTES: Routes = [
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: '',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
