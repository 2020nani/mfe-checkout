import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

export const MFE1_ROUTES: Routes = [
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'teste',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
