import { Injectable } from '@angular/core';

import { ProdutoMock } from './Mock';
import { Produto } from './produto'
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/shared/request.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl: string = environment.API.HOST_URL;

  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) { }

  getAll() {
    return this.http.get(
      `${this.apiUrl}/products`,
      { headers: this.requestService.getHeaders() }
    );
  }

  getMedia(productId) {
    return this.http.get(`${this.apiUrl}/products/${productId}/media`);
  }

  getById(id: Number) {
    return this.http.get(
      `${this.apiUrl}/products/${id}`, 
      {headers: this.requestService.getHeaders()}
      );
  }
}
