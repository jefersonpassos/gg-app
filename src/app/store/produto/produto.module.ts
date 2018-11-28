import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoComponent } from './produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    IonicModule
  ],
  declarations: [ProdutoComponent, DetalhesComponent],
  exports: [ProdutoRoutingModule]
})
export class ProdutoModule { }
