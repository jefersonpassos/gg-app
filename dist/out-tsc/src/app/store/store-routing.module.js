var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './produto/detalhes/detalhes.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
var routes = [
    { path: '', component: StoreComponent,
        children: [
            { path: 'produtos', component: ProdutoComponent },
            { path: 'produtos/:id', component: DetalhesComponent },
            { path: 'carrinho', component: CarrinhoComponent },
            { path: 'finalizar-compra', component: FinalizarCompraComponent }
        ]
    },
];
var StoreRoutingModule = /** @class */ (function () {
    function StoreRoutingModule() {
    }
    StoreRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], StoreRoutingModule);
    return StoreRoutingModule;
}());
export { StoreRoutingModule };
//# sourceMappingURL=store-routing.module.js.map