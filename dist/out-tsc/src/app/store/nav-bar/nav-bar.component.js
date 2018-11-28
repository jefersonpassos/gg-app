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
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho/carrinho.service';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_router, carrinhoService) {
        this._router = _router;
        this.carrinhoService = carrinhoService;
        this.router = _router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.carrinhoCount = _this.carrinhoService.getCarrinhoLength();
        }, 1000);
    };
    NavBarComponent = __decorate([
        Component({
            selector: 'nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            CarrinhoService])
    ], NavBarComponent);
    return NavBarComponent;
}());
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map