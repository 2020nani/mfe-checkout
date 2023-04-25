import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoRoutingModule } from './carrinho.routing.module';
import { ProdutoService } from '../core/produto.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@NgModule({
  declarations: [CarrinhoComponent, CheckoutComponent],
  imports: [CommonModule, FormsModule, CarrinhoRoutingModule],
  providers: [ProdutoService],
})
export class CarrinhoModule {}
