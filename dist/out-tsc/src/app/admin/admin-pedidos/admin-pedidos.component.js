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
import { AdminPedidosService } from './admin-pedidos.service';
var AdminPedidosComponent = /** @class */ (function () {
    function AdminPedidosComponent(saleService) {
        this.saleService = saleService;
    }
    AdminPedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.saleService.getPedidos()
            .subscribe(function (sales) {
            _this.sales = sales;
        });
    };
    AdminPedidosComponent = __decorate([
        Component({
            selector: 'app-admin-pedidos',
            templateUrl: './admin-pedidos.component.html',
            styleUrls: ['./admin-pedidos.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPedidosService])
    ], AdminPedidosComponent);
    return AdminPedidosComponent;
}());
export { AdminPedidosComponent };
//# sourceMappingURL=admin-pedidos.component.js.map