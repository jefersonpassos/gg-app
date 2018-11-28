import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProdutoComponent } from './admin-produto/admin-produto.component';
import { AdminProdutoNovoComponent } from './admin-produto-novo/admin-produto-novo.component';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { AdminPedidosDetalheComponent } from './admin-pedidos/admin-pedidos-detalhe/admin-pedidos-detalhe.component';
import { AdminProdutoDetalheComponent } from './admin-produto/admin-produto-detalhe/admin-produto-detalhe.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'produtos', component: AdminProdutoComponent},
      { path: 'produtos/:id', component: AdminProdutoDetalheComponent},
      { path: 'produtos/novo', component: AdminProdutoNovoComponent},
      { path: 'vendas', component: AdminPedidosComponent },
      { path: 'vendas/:id', component: AdminPedidosDetalheComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
