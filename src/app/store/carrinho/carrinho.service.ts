import { Injectable } from '@angular/core';
import { Produto } from '../produto/produto';
import { CarrinhoModel } from '../../models/carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() {
    if (!localStorage.getItem('carrinho')) {
      localStorage.setItem('carrinho', '[]');
    }
  }

  addProduct(product) {
    const carrinho: CarrinhoModel[] = this.getCarrinho();
    let productExists = false;
    console.log(carrinho.keys(), product);
    // tslint:disable-next-line:forin
    for (const index in carrinho ) {
      const _product = carrinho[index];
      console.log(_product.id, product.id);
      if (_product.id === product.id) {
        carrinho[index].amountSelected++;
        productExists = true;
      }
    }
    if (!productExists) {
      carrinho.push({ id: product.id, amountSelected: 1 });
    }
    this.updateCarrinho(carrinho);
  }

  getAmountSelected(id) {
    for (const product of this.getCarrinho()) {
      console.log(product, id);
      if (+product.id === id) {
        return product.amountSelected;
      }
    }
  }

  removeProduct(product) {
    const newCarrinho = this.getCarrinho().filter( (_product: any ) => {
      return product !== _product.id;
    });
    this.updateCarrinho(newCarrinho);
  }

  updateCarrinho(data){
    return localStorage.setItem('carrinho', JSON.stringify(data));
  }

  getCarrinho(): CarrinhoModel[] {
    return JSON.parse(localStorage.getItem('carrinho'));
  }

  getCarrinhoLength() {
    return this.getCarrinho().length;
  }

  resetCarrinho() {
    this.updateCarrinho([]);
  }
}
