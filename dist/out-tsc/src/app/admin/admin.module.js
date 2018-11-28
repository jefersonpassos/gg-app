var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProdutoComponent } from './admin-produto/admin-produto.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminProdutoNovoComponent } from './admin-produto-novo/admin-produto-novo.component';
import { AdminNavBarMobileComponent } from './admin-nav-bar-mobile/admin-nav-bar-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { AdminPedidosService } from './admin-pedidos/admin-pedidos.service';
import { AdminPedidosDetalheComponent } from './admin-pedidos/admin-pedidos-detalhe/admin-pedidos-detalhe.component';
import { AdminProdutoDetalheComponent } from './admin-produto/admin-produto-detalhe/admin-produto-detalhe.component';
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                AdminRoutingModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AdminComponent,
                AdminProdutoComponent,
                AdminNavBarComponent,
                AdminProdutoNovoComponent,
                AdminNavBarMobileComponent,
                AdminPedidosComponent,
                AdminPedidosDetalheComponent,
                AdminProdutoDetalheComponent
            ],
            exports: [AdminRoutingModule],
            providers: [AdminPedidosService]
        })
    ], AdminModule);
    return AdminModule;
}());
export { AdminModule };
//# sourceMappingURL=admin.module.js.map