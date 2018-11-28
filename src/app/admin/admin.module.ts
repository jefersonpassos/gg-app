import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProdutoComponent } from './admin-produto/admin-produto.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminProdutoNovoComponent } from './admin-produto-novo/admin-produto-novo.component';
import { AdminNavBarMobileComponent } from './admin-nav-bar-mobile/admin-nav-bar-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { AdminPedidosService } from './admin-pedidos/admin-pedidos.service';
import { AdminPedidosDetalheComponent } from './admin-pedidos/admin-pedidos-detalhe/admin-pedidos-detalhe.component';
import { AdminProdutoDetalheComponent } from './admin-produto/admin-produto-detalhe/admin-produto-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      AdminComponent,
      AdminProdutoComponent,
      AdminNavBarComponent,
      AdminProdutoNovoComponent,
      AdminNavBarMobileComponent,
      AdminPedidosComponent,
      AdminPedidosDetalheComponent,
      AdminProdutoDetalheComponent],
  exports: [AdminRoutingModule],
  providers: [AdminPedidosService]
})
export class AdminModule { }
