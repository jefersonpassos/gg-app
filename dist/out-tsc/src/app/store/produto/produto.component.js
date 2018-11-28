var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, ElementRef } from '@angular/core';
import { ProdutoService } from './produto.service';
import { environment } from 'src/environments/environment';
var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent(el, produtoService) {
        this.el = el;
        this.produtoService = produtoService;
        this.scrollPositionToAction = 9;
        this.mediaPath = environment.API.MEDIA_PATH;
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtoService.getAll()
            .subscribe(function (data) {
            _this.products = data;
        });
    };
    ProdutoComponent.prototype.checkScroll = function () {
        this.scrollPosition = window.pageYOffset;
    };
    __decorate([
        HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProdutoComponent.prototype, "checkScroll", null);
    ProdutoComponent = __decorate([
        Component({
            selector: 'app-produto',
            templateUrl: './produto.component.html',
            styleUrls: ['./produto.component.scss']
        }),
        __metadata("design:paramtypes", [ElementRef, ProdutoService])
    ], ProdutoComponent);
    return ProdutoComponent;
}());
export { ProdutoComponent };
//# sourceMappingURL=produto.component.js.map