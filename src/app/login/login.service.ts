import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestService } from '../shared/request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.API.HOST_URL;

  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) { }

  auth({email, password}) {
    return this.http.post(`${this.apiUrl}/sessions`,
      {email, password},
      {headers: this.requestService.setHeader()}
      );
  }
}
