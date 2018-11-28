import { Component, OnInit } from '@angular/core';
import { AdminPedidosService } from './admin-pedidos.service';

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.scss']
})
export class AdminPedidosComponent implements OnInit {

  sales;

  constructor(
    private saleService: AdminPedidosService
  ) { }

  ngOnInit() {
    this.saleService.getPedidos()
      .subscribe(
        sales => {
          this.sales = sales;
        }
      )
  }

}
