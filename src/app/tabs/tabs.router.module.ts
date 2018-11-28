import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { StoreComponent } from '../store/store.component';
import { ProdutoComponent } from '../store/produto/produto.component';
import { DetalhesComponent } from '../store/produto/detalhes/detalhes.component';
import { CarrinhoComponent } from '../store/carrinho/carrinho.component';
import { FinalizarCompraComponent } from '../store/finalizar-compra/finalizar-compra.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(produtos:produtos)',
        pathMatch: 'full',
      },
      {
        path: 'produtos',
        outlet: 'produtos',
        component: ProdutoComponent,
      },
      {
        path: 'carrinho',
        outlet: 'carrinho',
        component: CarrinhoComponent
      },
      {
        path: 'finalizar',
        outlet: 'finalizar',
        component: FinalizarCompraComponent
      },
    ]
  },
  {
    path: 'produtos/:id',
    component: DetalhesComponent
  },
  {
    path: '',
    redirectTo: '/tabs/(produtos:produtos)',
    pathMatch: 'tabs'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
