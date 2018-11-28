import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() {}

  setHeader() {
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
    return headers;
  }

  setHeadersToken() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token}`);

    return headers;
  }

  getHelpersFile(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);

    return headers;
  }

  getHeaders() {
    if (localStorage.getItem('token')) {
      return this.setHeadersToken();
    }

    return this.setHeader();
  }
}
