import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  router: Router;
  carrinhoCount;

  constructor(
    private _router: Router,
    private carrinhoService: CarrinhoService
  ) {
    this.router = _router;
  }

  ngOnInit() {
    setInterval( () => {
      this.carrinhoCount = this.carrinhoService.getCarrinhoLength();
    }, 1000);
  }

}
