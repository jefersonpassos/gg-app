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
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/shared/request.service';
import { environment } from 'src/environments/environment';
var FinalizarCompraService = /** @class */ (function () {
    function FinalizarCompraService(http, requestService) {
        this.http = http;
        this.requestService = requestService;
        this.apiUrl = environment.API.HOST_URL;
    }
    FinalizarCompraService.prototype.getUser = function () {
        return this.http.get(this.apiUrl + "/sessions", { headers: this.requestService.getHeaders() });
    };
    FinalizarCompraService.prototype.finishSale = function (sale, products) {
        return this.http.post(this.apiUrl + "/sales", {
            total_value: sale.total_value,
            frete_value: sale.frete_value,
            products: products.map(function (product) {
                return { id: product.id, amount: product.amountSelected };
            })
        }, { headers: this.requestService.getHeaders() });
    };
    FinalizarCompraService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            RequestService])
    ], FinalizarCompraService);
    return FinalizarCompraService;
}());
export { FinalizarCompraService };
//# sourceMappingURL=finalizar-compra.service.js.map