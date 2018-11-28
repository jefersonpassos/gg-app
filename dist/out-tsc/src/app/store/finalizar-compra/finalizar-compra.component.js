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
import { FinalizarCompraService } from './finalizar-compra.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { ProdutoService } from '../produto/produto.service';
import { UikitHelper } from '../../shared/uikit.helper';
import { Router } from '@angular/router';
var FinalizarCompraComponent = /** @class */ (function () {
    function FinalizarCompraComponent(finalizarService, carrinhoService, productService, router) {
        this.finalizarService = finalizarService;
        this.carrinhoService = carrinhoService;
        this.productService = productService;
        this.router = router;
        this.amountSelected = [];
        this.products = [];
        this.frete = 0;
    }
    FinalizarCompraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carrinhoService.getCarrinho()
            .map(function (product) {
            return _this.productService.getById(product.id)
                .subscribe(function (data) {
                _this.amountSelected[product.id] = _this.carrinhoService.getAmountSelected(product.id);
                _this.products = _this.products.concat([data]);
                _this.getTotalValue();
            });
        });
        this.finalizarService.getUser()
            .subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
    };
    FinalizarCompraComponent.prototype.finishSale = function () {
        var _this = this;
        this.finalizarService.finishSale({
            total_value: this.totalValue,
            frete_value: this.frete
        }, this.carrinhoService.getCarrinho())
            .subscribe(function (data) {
            UikitHelper.alert('Compra finalizada');
            _this.carrinhoService.resetCarrinho();
            _this.router.navigate(['produtos']);
            console.log(data);
        });
    };
    FinalizarCompraComponent.prototype.getTotalValue = function () {
        console.log(this.products);
        var totalValue = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            console.log(product.price);
            totalValue += ((+product.price) * this.amountSelected[product.id]);
        }
        this.totalValue = totalValue;
    };
    FinalizarCompraComponent = __decorate([
        Component({
            selector: 'app-finalizar-compra',
            templateUrl: './finalizar-compra.component.html',
            styleUrls: ['./finalizar-compra.component.scss']
        }),
        __metadata("design:paramtypes", [FinalizarCompraService,
            CarrinhoService,
            ProdutoService,
            Router])
    ], FinalizarCompraComponent);
    return FinalizarCompraComponent;
}());
export { FinalizarCompraComponent };
//# sourceMappingURL=finalizar-compra.component.js.map