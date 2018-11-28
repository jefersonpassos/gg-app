import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';
import { environment } from 'src/environments/environment';
 

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  products: Produto [];
  scrollPosition: any;
  scrollPositionToAction = 9;
  mediaPath = environment.API.MEDIA_PATH;

  constructor(public el: ElementRef, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getAll()
      .subscribe( (data: Produto[]) => {
        this.products = data;
    });
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.scrollPosition = window.pageYOffset;
    }

}
