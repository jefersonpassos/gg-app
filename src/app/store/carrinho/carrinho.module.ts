import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    IonicModule
  ],
  declarations: [CarrinhoComponent],
  exports: [CarrinhoRoutingModule]
})
export class CarrinhoModule { }
