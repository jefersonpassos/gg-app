import { Component, OnInit } from '@angular/core';
import { AdminPedidosService } from '../admin-pedidos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/store/produto/produto';

@Component({
  selector: 'app-admin-pedidos-detalhe',
  templateUrl: './admin-pedidos-detalhe.component.html',
  styleUrls: ['./admin-pedidos-detalhe.component.scss']
})
export class AdminPedidosDetalheComponent implements OnInit {

  sale;
  id;

  constructor(
    private saleService: AdminPedidosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = Number(params.id);
    });
   }

  ngOnInit() {
    this.saleService.getPedido(this.id)
      .subscribe(
        sale => {
          this.sale = sale;
          console.log(sale);
        }
      );
  }

}
