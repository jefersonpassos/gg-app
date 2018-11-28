import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/shared/request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinalizarCompraService {

  apiUrl = environment.API.HOST_URL;

  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) { }

  getUser() {
    return this.http.get(
      `${this.apiUrl}/sessions`,
      { headers: this.requestService.getHeaders() }
    );
  }

  finishSale(sale, products) {
    return this.http.post(
      `${this.apiUrl}/sales`,
      {
        total_value: sale.total_value,
        frete_value: sale.frete_value,
        products: products.map(product => {
           return { id: product.id, amount: product.amountSelected }
        })
      },
      { headers: this.requestService.getHeaders() }
    );
  }
}
