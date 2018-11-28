import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { HomeModule } from './home/home.module';
import { ProdutoModule } from './produto/produto.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMobileComponent } from './nav-bar-mobile/nav-bar-mobile.component';
import { FinalizarCompraModule } from './finalizar-compra/finalizar-compra.module';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule,
    HomeModule,
    ProdutoModule,
    CarrinhoModule,
    FinalizarCompraModule
  ],
  declarations: [StoreComponent, NavBarComponent, NavBarMobileComponent],
  exports: [StoreRoutingModule],
})
export class StoreModule { }
