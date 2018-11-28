import { Component, OnInit } from '@angular/core';
import { FinalizarCompraService } from './finalizar-compra.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { UikitHelper } from '../../shared/uikit.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent implements OnInit {

  user;
  amountSelected = [];
  products: Produto[] = [];
  totalValue: Number;
  frete: Number = 0;

  constructor(
    private finalizarService: FinalizarCompraService,
    private carrinhoService: CarrinhoService,
    private productService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {
      name: '',
      street: '',
      cep: '',
      city: '',
      state: '',
      phone: '',
    }

    this.carrinhoService.getCarrinho()
      .map((product: any) => {
        return this.productService.getById(product.id)
          .subscribe( (data: Produto) => {
            this.amountSelected[product.id] = this.carrinhoService.getAmountSelected(product.id);
            this.products = [...this.products, data];
            this.getTotalValue();
          });
        });
    this.finalizarService.getUser()
      .subscribe(
        (user: any) => {
          if(user.name)
            this.user = user;
        }
      );
  }

  finishSale() {
    this.finalizarService.finishSale({
      total_value: this.totalValue,
      frete_value: this.frete
    }, this.carrinhoService.getCarrinho())
      .subscribe(
        data => {
          UikitHelper.alert('Compra finalizada');
          this.carrinhoService.resetCarrinho();
          this.router.navigate(['produtos']);
          console.log(data);
        }
      );
  }

  getTotalValue() {
    console.log(this.products);
    let totalValue = 0;
    for (const product of this.products) {
      console.log(product.price);
      totalValue += ((+product.price) * this.amountSelected[product.id]);
    }

    this.totalValue = totalValue;
  }



}
