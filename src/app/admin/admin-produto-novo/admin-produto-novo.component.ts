import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdminProductService } from '../admin-product.service';
import { fbind } from 'q';
import { Produto } from 'src/app/store/produto/produto';

@Component({
  selector: 'app-admin-produto-novo',
  templateUrl: './admin-produto-novo.component.html',
  styleUrls: ['./admin-produto-novo.component.scss']
})
export class AdminProdutoNovoComponent implements OnInit {

  productForm;
  selectedFiles;
  urls;
  images = [];
  formDataImages: FormData;

  constructor(
    private formBuilder: FormBuilder,
    private productService: AdminProductService
  ) {}

  detectFiles(event) {
    this.urls = [];
    this.images = [];
    this.formDataImages = new FormData();
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        this.formDataImages.append('images[]', file);
        this.images = [...this.images, <File>file];
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  ngOnInit() {
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
  }

  onSubmit() {
    const product = this.productForm.value;
    delete product.images;
    this.productService.saveProduct(product)
      .subscribe(
        (data: Produto) => {
          console.log(data);
          this.uploadImages(data.id);
        },
        error => {
          console.error(error);
        }
      );
  }

  uploadImages(productId) {
    this.productService.saveImages(this.formDataImages, productId)
      .subscribe(
        success => {
          console.log(success);
        },
        error => {
          console.error(error);
        }
      )
  }

}
