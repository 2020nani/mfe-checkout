import { map } from 'rxjs';
import { Component, SimpleChange } from '@angular/core';
import { ProdutoService } from '../core/produto.service';
import { Encomenda, Produtos } from '../core/models/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  constructor(private produtoService: ProdutoService) {}

  checkout$: boolean = true;
  encomendas$: Encomenda[] = [];
  precoTotal = 0;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.produtoService.getEncomenda().map((produto: any, index: number) => {
      const produtoIndex = this.encomendas$.findIndex(
        (encom) => encom.nome === produto.nome
      );
      if (produtoIndex >= 0) {
        console.log(this.encomendas$[produtoIndex]);
        this.encomendas$[produtoIndex].quantidade!++;
      } else {
        this.encomendas$.push({
          ...this.mapperEncomenda(produto),
        });
      }
    });
  }

  removerCarrinho(encomenda: Encomenda) {
    const index = this.encomendas$.findIndex((p) => p.nome === encomenda.nome);
    if (index >= 0) {
      this.encomendas$.splice(index, 1);
    }
  }

  adicionarCarrinho(encomenda: Encomenda) {
    const index = this.encomendas$.findIndex((p) => p.nome === encomenda.nome);
    if (index >= 0) {
      this.encomendas$[index].quantidade!++;
    }
    this.produtoService.addEncomenda(encomenda);
  }

  retirarCarrinho(index: number): void {
    this.produtoService.removeEncomenda(this.encomendas$, index);
  }

  getPrecoTotal(): any {
    if (this.encomendas$.length > 0) {
    }
    this.precoTotal = this.encomendas$.reduce((totalSoma, car) => {
      return totalSoma + car.preco! * car.quantidade!;
    }, 0);
    return this.precoTotal;
  }

  habilitarCheckout() {
    console.log('ok');
    this.checkout$ = true;
  }

  mapperEncomenda(produto: Produtos): Encomenda {
    let encomenda = new Encomenda(produto, 1, 'her@mail.com');
    return encomenda;
  }
}
