var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProdutoComponent } from './admin-produto/admin-produto.component';
import { AdminProdutoNovoComponent } from './admin-produto-novo/admin-produto-novo.component';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { AdminPedidosDetalheComponent } from './admin-pedidos/admin-pedidos-detalhe/admin-pedidos-detalhe.component';
import { AdminProdutoDetalheComponent } from './admin-produto/admin-produto-detalhe/admin-produto-detalhe.component';
var routes = [
    { path: 'admin', component: AdminComponent,
        children: [
            { path: 'produtos', component: AdminProdutoComponent },
            { path: 'produtos/:id', component: AdminProdutoDetalheComponent },
            { path: 'produtos/novo', component: AdminProdutoNovoComponent },
            { path: 'vendas', component: AdminPedidosComponent },
            { path: 'vendas/:id', component: AdminPedidosDetalheComponent },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map