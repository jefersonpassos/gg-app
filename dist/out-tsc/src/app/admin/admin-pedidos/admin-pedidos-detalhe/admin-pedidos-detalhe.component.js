var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AdminPedidosService } from '../admin-pedidos.service';
import { ActivatedRoute } from '@angular/router';
var AdminPedidosDetalheComponent = /** @class */ (function () {
    function AdminPedidosDetalheComponent(saleService, route) {
        var _this = this;
        this.saleService = saleService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.id = Number(params.id);
        });
    }
    AdminPedidosDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.saleService.getPedido(this.id)
            .subscribe(function (sale) {
            _this.sale = sale;
            console.log(sale);
        });
    };
    AdminPedidosDetalheComponent = __decorate([
        Component({
            selector: 'app-admin-pedidos-detalhe',
            templateUrl: './admin-pedidos-detalhe.component.html',
            styleUrls: ['./admin-pedidos-detalhe.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPedidosService,
            ActivatedRoute])
    ], AdminPedidosDetalheComponent);
    return AdminPedidosDetalheComponent;
}());
export { AdminPedidosDetalheComponent };
//# sourceMappingURL=admin-pedidos-detalhe.component.js.map