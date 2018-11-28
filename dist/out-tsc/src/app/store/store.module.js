var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                StoreRoutingModule,
                HomeModule,
                ProdutoModule,
                CarrinhoModule,
                FinalizarCompraModule
            ],
            declarations: [StoreComponent, NavBarComponent, NavBarMobileComponent, FinalizarCompraComponent],
            exports: [StoreRoutingModule],
        })
    ], StoreModule);
    return StoreModule;
}());
export { StoreModule };
//# sourceMappingURL=store.module.js.map