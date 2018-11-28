import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto/produto';
import { CarrinhoService } from './carrinho.service';
import { ProdutoService } from '../produto/produto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  products: Produto[] = [];
  amountSelected: Object = {};
  mediaPath = environment.API.MEDIA_PATH;
  totalValue: Number = 0;
  freteValue: Number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private productService: ProdutoService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.carrinhoService.getCarrinho()
    .map(product => {
      console.log(product.id)
      return this.productService.getById(product.id)
        .subscribe( (data: Produto) => {
          this.amountSelected[product.id] = this.carrinhoService.getAmountSelected(product.id);
          this.products = [...this.products, data];
          this.getTotalValue();
        });
      });
  }

  getTotalValue() {
    let totalValue = 0;
    for (const product of this.products) {
      console.log(product.price);
      totalValue += ((+product.price) * this.amountSelected[product.id]);
    }

    this.totalValue = totalValue;
  }

  async removeProduct(product) {
    await this.carrinhoService.removeProduct(product.id);
    await this.updateCarrinho();
  }

  updateCarrinho() {
    this.getProducts();
  }

}
