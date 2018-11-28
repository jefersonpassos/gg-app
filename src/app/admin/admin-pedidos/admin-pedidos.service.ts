import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/shared/request.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPedidosService {

  apiUrl = environment.API.HOST_URL;

  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) { }

  getPedidos() {
    return this.http.get(
      `${this.apiUrl}/sales`,
      { headers: this.requestService.getHeaders() }
      );
  }

  getPedido(id) {
    return this.http.get(
      `${this.apiUrl}/sales/${id}`,
      { headers: this.requestService.getHeaders() }
    )
  }
}
