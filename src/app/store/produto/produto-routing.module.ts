import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoComponent } from './produto.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produtos/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
