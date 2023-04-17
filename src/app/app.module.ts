import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './header/footer.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CheckoutModule } from './checkout/checkout.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
