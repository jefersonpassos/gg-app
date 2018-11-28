import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../../admin-product.service';
import { Produto } from 'src/app/store/produto/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-produto-detalhe',
  templateUrl: './admin-produto-detalhe.component.html',
  styleUrls: ['./admin-produto-detalhe.component.scss']
})
export class AdminProdutoDetalheComponent implements OnInit {

  id: number;
  product: Produto;
  mediaPath = environment.API.MEDIA_PATH;

  constructor(
    private route: ActivatedRoute,
    private adminProductService: AdminProductService
  ) { 
    this.route.params.subscribe(params => {
      this.id = Number(params.id);
    });
  }

  ngOnInit() {
    this.adminProductService.getProduct(this.id)
      .subscribe(
        (product: Produto) => {
          this.product = product;
        }
      )
  }

}
