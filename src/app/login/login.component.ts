import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TokenModel } from '../models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    this.loginService.auth(this.loginForm.value)
      .subscribe((data: TokenModel) => {
        localStorage.setItem('token', data.token);
      },
      error => {
        console.log(error.error);
      });
  }
}
