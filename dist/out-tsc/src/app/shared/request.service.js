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
import { HttpHeaders } from '@angular/common/http';
var RequestService = /** @class */ (function () {
    function RequestService() {
    }
    RequestService.prototype.setHeader = function () {
        var headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');
        return headers;
    };
    RequestService.prototype.setHeadersToken = function () {
        var token = localStorage.getItem('token');
        var headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', "Bearer " + token);
        return headers;
    };
    RequestService.prototype.getHelpersFile = function () {
        var token = localStorage.getItem('token');
        var headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', "Bearer " + token);
        return headers;
    };
    RequestService.prototype.getHeaders = function () {
        if (localStorage.getItem('token')) {
            return this.setHeadersToken();
        }
        return this.setHeader();
    };
    RequestService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RequestService);
    return RequestService;
}());
export { RequestService };
//# sourceMappingURL=request.service.js.map