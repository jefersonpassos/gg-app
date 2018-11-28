var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var CarrinhoService = /** @class */ (function () {
    function CarrinhoService() {
        if (!localStorage.getItem('carrinho')) {
            localStorage.setItem('carrinho', '[]');
        }
    }
    CarrinhoService.prototype.addProduct = function (product) {
        var carrinho = this.getCarrinho();
        var productExists = false;
        console.log(carrinho.keys(), product);
        // tslint:disable-next-line:forin
        for (var index in carrinho) {
            var _product = carrinho[index];
            console.log(_product.id, product.id);
            if (_product.id === product.id) {
                carrinho[index].amountSelected++;
                productExists = true;
            }
        }
        if (!productExists) {
            carrinho.push({ id: product.id, amountSelected: 1 });
        }
        this.updateCarrinho(carrinho);
    };
    CarrinhoService.prototype.getAmountSelected = function (id) {
        for (var _i = 0, _a = this.getCarrinho(); _i < _a.length; _i++) {
            var product = _a[_i];
            console.log(product, id);
            if (+product.id === id) {
                return product.amountSelected;
            }
        }
    };
    CarrinhoService.prototype.removeProduct = function (product) {
        var newCarrinho = this.getCarrinho().filter(function (_product) {
            return product !== _product.id;
        });
        this.updateCarrinho(newCarrinho);
    };
    CarrinhoService.prototype.updateCarrinho = function (data) {
        return localStorage.setItem('carrinho', JSON.stringify(data));
    };
    CarrinhoService.prototype.getCarrinho = function () {
        return JSON.parse(localStorage.getItem('carrinho'));
    };
    CarrinhoService.prototype.getCarrinhoLength = function () {
        return this.getCarrinho().length;
    };
    CarrinhoService.prototype.resetCarrinho = function () {
        this.updateCarrinho([]);
    };
    CarrinhoService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CarrinhoService);
    return CarrinhoService;
}());
export { CarrinhoService };
//# sourceMappingURL=carrinho.service.js.map