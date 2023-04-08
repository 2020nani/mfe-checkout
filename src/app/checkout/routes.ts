import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';

export const CHECKOUT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'checkout-encomenda',
    pathMatch: 'full',
  },
  {
    path: 'checkout-encomenda',
    component: CheckoutComponent,
  },
];
