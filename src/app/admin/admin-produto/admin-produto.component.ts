import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../admin-product.service';
import { Produto } from 'src/app/store/produto/produto';

@Component({
  selector: 'app-admin-produto',
  templateUrl: './admin-produto.component.html',
  styleUrls: ['./admin-produto.component.scss']
})
export class AdminProdutoComponent implements OnInit {

  products: Produto[];

  constructor(
    private adminProductService: AdminProductService
  ) { }

  ngOnInit() {
    this.adminProductService.getProdcuts()
      .subscribe(
        (data: Produto[]) => {
          console.log(data);
          this.products = data;
        },
        error => {
          console.error(error);
        }
      )
  }

}
