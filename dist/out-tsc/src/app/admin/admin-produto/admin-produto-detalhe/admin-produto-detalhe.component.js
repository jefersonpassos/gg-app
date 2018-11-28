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
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../../admin-product.service';
import { environment } from 'src/environments/environment';
var AdminProdutoDetalheComponent = /** @class */ (function () {
    function AdminProdutoDetalheComponent(route, adminProductService) {
        var _this = this;
        this.route = route;
        this.adminProductService = adminProductService;
        this.mediaPath = environment.API.MEDIA_PATH;
        this.route.params.subscribe(function (params) {
            _this.id = Number(params.id);
        });
    }
    AdminProdutoDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminProductService.getProduct(this.id)
            .subscribe(function (product) {
            _this.product = product;
        });
    };
    AdminProdutoDetalheComponent = __decorate([
        Component({
            selector: 'app-admin-produto-detalhe',
            templateUrl: './admin-produto-detalhe.component.html',
            styleUrls: ['./admin-produto-detalhe.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            AdminProductService])
    ], AdminProdutoDetalheComponent);
    return AdminProdutoDetalheComponent;
}());
export { AdminProdutoDetalheComponent };
//# sourceMappingURL=admin-produto-detalhe.component.js.map