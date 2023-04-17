import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../header/footer.component';
import { CheckoutComponent } from '../checkout/checkout.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class SharedModule {}
