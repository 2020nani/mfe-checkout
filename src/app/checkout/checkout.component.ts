import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  expression: boolean = false;
  assetUrl = __webpack_public_path__;
  constructor(private router$: Router) {}

  teste() {
    console.log(document);
    this.router$.navigate(['']);
    return this.assetUrl + 'styles.css';
  }
}
