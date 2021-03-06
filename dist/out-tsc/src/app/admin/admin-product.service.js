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
import { RequestService } from '../shared/request.service';
import { environment } from 'src/environments/environment';
var AdminProductService = /** @class */ (function () {
    function AdminProductService(http, requestService) {
        this.http = http;
        this.requestService = requestService;
        this.apiUrl = environment.API.HOST_URL;
    }
    AdminProductService.prototype.saveProduct = function (product) {
        return this.http.post(this.apiUrl + "/products", product, { headers: this.requestService.setHeadersToken() });
    };
    AdminProductService.prototype.saveImages = function (images, productId) {
        console.log(images);
        return this.http.post(this.apiUrl + "/products/" + productId + "/media", images, { headers: this.requestService.getHelpersFile() });
    };
    AdminProductService.prototype.getProdcuts = function () {
        return this.http.get(this.apiUrl + "/products", { headers: this.requestService.getHeaders() });
    };
    AdminProductService.prototype.getProduct = function (id) {
        return this.http.get(this.apiUrl + "/products/" + id, { headers: this.requestService.getHeaders() });
    };
    AdminProductService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            RequestService])
    ], AdminProductService);
    return AdminProductService;
}());
export { AdminProductService };
//# sourceMappingURL=admin-product.service.js.map