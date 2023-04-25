import { Injectable, EventEmitter } from '@angular/core';
import { tap, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Encomenda, Produtos } from './models/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:8080/v1/produtos';
  encomenda: Produtos[] = [];
  quantiaEncomendaEmitter = new EventEmitter<number>();

  getProdutos(): Observable<any> {
    return this.http.get<any>(this.API).pipe(
      map((prod) => prod.content),
      tap(console.log)
    );
  }

  addEncomenda(encomenda: any) {
    if (localStorage.getItem('encomenda')) {
      this.encomenda = JSON.parse(localStorage.getItem('encomenda')!);
    }
    this.encomenda.push({ ...encomenda });
    localStorage.setItem('encomenda', JSON.stringify(this.encomenda));
  }

  removeEncomenda(encomendas: Encomenda[], index: number): void {
    encomendas[index].quantidade = encomendas[index].quantidade! - 1;
    localStorage.setItem('encomenda', JSON.stringify(encomendas));
  }

  getEncomenda() {
    if (localStorage.getItem('encomenda')) {
      return JSON.parse(localStorage.getItem('encomenda')!);
    }
    return 0;
  }
}
