import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: CarrinhoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
