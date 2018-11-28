import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestService } from '../shared/request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  apiUrl = environment.API.HOST_URL;

  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) { }

  saveProduct(product) {
    return this.http.post(
        `${this.apiUrl}/products`,
        product,
        {headers: this.requestService.setHeadersToken()}
      );
  }

  saveImages(images, productId){
    console.log(images);
    return this.http.post(
      `${this.apiUrl}/products/${productId}/media`, 
      images,
      {headers: this.requestService.getHelpersFile()}
      );
  }

  getProdcuts() {
    return this.http.get(
      `${this.apiUrl}/products`,
      { headers: this.requestService.getHeaders() }
    )
  }

  getProduct(id) {
    return this.http.get(
      `${this.apiUrl}/products/${id}`,
      { headers: this.requestService.getHeaders() }
    )
  }
}
