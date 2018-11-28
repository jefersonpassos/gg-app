import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './produto/detalhes/detalhes.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';

const routes: Routes = [
  { path: '', component: StoreComponent, 
    children: [
      { path: 'produtos', component: ProdutoComponent},
      { path: 'produtos/:id', component: DetalhesComponent },
      { path: 'carrinho', component: CarrinhoComponent },
      { path: 'finalizar-compra', component: FinalizarCompraComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
