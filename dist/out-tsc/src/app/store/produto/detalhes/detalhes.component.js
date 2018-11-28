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
import { CarrinhoService } from '../../carrinho/carrinho.service';
import { ProdutoService } from '../produto.service';
import { environment } from 'src/environments/environment';
var DetalhesComponent = /** @class */ (function () {
    function DetalhesComponent(produtoService, route, carrinhoService) {
        var _this = this;
        this.produtoService = produtoService;
        this.route = route;
        this.carrinhoService = carrinhoService;
        this.mediaPath = environment.API.MEDIA_PATH;
        this.route.params.subscribe(function (params) {
            _this.id = Number(params.id);
        });
    }
    DetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtoService.getById(this.id)
            .subscribe(function (data) {
            _this.product = data;
        });
    };
    DetalhesComponent.prototype.addCarrinho = function () {
        this.carrinhoService.addProduct(this.product);
    };
    DetalhesComponent.prototype.getParcel = function (value, parcellAmount, cashDiscount) {
        if (cashDiscount === void 0) { cashDiscount = 0; }
        return (value + (value * (cashDiscount / 100))) / parcellAmount;
    };
    DetalhesComponent = __decorate([
        Component({
            selector: 'app-detalhes',
            templateUrl: './detalhes.component.html',
            styleUrls: ['./detalhes.component.scss']
        }),
        __metadata("design:paramtypes", [ProdutoService,
            ActivatedRoute,
            CarrinhoService])
    ], DetalhesComponent);
    return DetalhesComponent;
}());
export { DetalhesComponent };
//# sourceMappingURL=detalhes.component.js.map