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
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/shared/request.service';
import { HttpClient } from '@angular/common/http';
var ProdutoService = /** @class */ (function () {
    function ProdutoService(http, requestService) {
        this.http = http;
        this.requestService = requestService;
        this.apiUrl = environment.API.HOST_URL;
    }
    ProdutoService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/products", { headers: this.requestService.getHeaders() });
    };
    ProdutoService.prototype.getMedia = function (productId) {
        return this.http.get(this.apiUrl + "/products/" + productId + "/media");
    };
    ProdutoService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/products/" + id, { headers: this.requestService.getHeaders() });
    };
    ProdutoService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            RequestService])
    ], ProdutoService);
    return ProdutoService;
}());
export { ProdutoService };
//# sourceMappingURL=produto.service.js.map