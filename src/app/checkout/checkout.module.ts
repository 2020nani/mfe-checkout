import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CHECKOUT_ROUTES } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, RouterModule.forChild(CHECKOUT_ROUTES)],
})
export class CheckoutModule {}
