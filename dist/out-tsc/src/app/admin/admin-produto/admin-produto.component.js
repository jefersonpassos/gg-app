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
import { AdminProductService } from '../admin-product.service';
var AdminProdutoComponent = /** @class */ (function () {
    function AdminProdutoComponent(adminProductService) {
        this.adminProductService = adminProductService;
    }
    AdminProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminProductService.getProdcuts()
            .subscribe(function (data) {
            console.log(data);
            _this.products = data;
        }, function (error) {
            console.error(error);
        });
    };
    AdminProdutoComponent = __decorate([
        Component({
            selector: 'app-admin-produto',
            templateUrl: './admin-produto.component.html',
            styleUrls: ['./admin-produto.component.scss']
        }),
        __metadata("design:paramtypes", [AdminProductService])
    ], AdminProdutoComponent);
    return AdminProdutoComponent;
}());
export { AdminProdutoComponent };
//# sourceMappingURL=admin-produto.component.js.map