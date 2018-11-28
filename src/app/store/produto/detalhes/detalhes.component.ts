import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../produto';
import { CarrinhoService } from '../../carrinho/carrinho.service';
import { ProdutoService } from '../produto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  product: Produto;
  id: Number;
  mediaPath = environment.API.MEDIA_PATH;

  constructor(
    private produtoService: ProdutoService, 
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) {
    this.route.params.subscribe(params => {
      this.id = Number(params.id);
    });
   }

  ngOnInit() {
    this.produtoService.getById(this.id)
      .subscribe( (data: Produto) => {
        this.product = data;
      });
  }

  addCarrinho(){
    this.carrinhoService.addProduct(this.product);
  }

  getParcel(value, parcellAmount, cashDiscount = 0){
    return (value + (value * (cashDiscount / 100)) ) / parcellAmount;
  }
}
