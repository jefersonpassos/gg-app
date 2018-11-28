var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ProdutoComponent } from '../store/produto/produto.component';
import { DetalhesComponent } from '../store/produto/detalhes/detalhes.component';
import { CarrinhoComponent } from '../store/carrinho/carrinho.component';
import { FinalizarCompraComponent } from '../store/finalizar-compra/finalizar-compra.component';
var routes = [
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
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map