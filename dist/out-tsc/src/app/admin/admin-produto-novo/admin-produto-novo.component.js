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
import { Validators, FormBuilder } from '@angular/forms';
import { AdminProductService } from '../admin-product.service';
var AdminProdutoNovoComponent = /** @class */ (function () {
    function AdminProdutoNovoComponent(formBuilder, productService) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.images = [];
    }
    AdminProdutoNovoComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        this.images = [];
        this.formDataImages = new FormData();
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                this.formDataImages.append('images[]', file);
                this.images = this.images.concat([file]);
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    AdminProdutoNovoComponent.prototype.ngOnInit = function () {
        this.productForm = this.formBuilder.group({
            title: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required],
            ageCategory: ['', Validators.required],
            cashDiscount: ['', Validators.required],
            parcel: ['', Validators.required],
            amount: ['', Validators.required],
            images: ['', Validators.required],
            slug: ['', Validators.required]
        });
    };
    AdminProdutoNovoComponent.prototype.onSubmit = function () {
        var _this = this;
        var product = this.productForm.value;
        delete product.images;
        this.productService.saveProduct(product)
            .subscribe(function (data) {
            console.log(data);
            _this.uploadImages(data.id);
        }, function (error) {
            console.error(error);
        });
    };
    AdminProdutoNovoComponent.prototype.uploadImages = function (productId) {
        this.productService.saveImages(this.formDataImages, productId)
            .subscribe(function (success) {
            console.log(success);
        }, function (error) {
            console.error(error);
        });
    };
    AdminProdutoNovoComponent = __decorate([
        Component({
            selector: 'app-admin-produto-novo',
            templateUrl: './admin-produto-novo.component.html',
            styleUrls: ['./admin-produto-novo.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            AdminProductService])
    ], AdminProdutoNovoComponent);
    return AdminProdutoNovoComponent;
}());
export { AdminProdutoNovoComponent };
//# sourceMappingURL=admin-produto-novo.component.js.map