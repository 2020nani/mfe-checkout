import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  assetUrl = __webpack_public_path__;

  teste() {
    return this.assetUrl + 'styles.css';
  }
}
