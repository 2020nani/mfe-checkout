import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  expression: boolean = false;
  assetUrl = __webpack_public_path__;

  teste() {
    console.log(document);
    this.expression = !this.expression;
    return this.assetUrl + 'styles.css';
  }
}
