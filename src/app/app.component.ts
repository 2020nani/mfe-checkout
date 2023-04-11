import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { CheckoutComponent } from './checkout/checkout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'checkout-doces-da-lu';
  assetUrl = __webpack_public_path__;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.assetUrl);
  }
}
