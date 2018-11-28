import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutoDetalheComponent } from './admin-produto-detalhe.component';

describe('AdminProdutoDetalheComponent', () => {
  let component: AdminProdutoDetalheComponent;
  let fixture: ComponentFixture<AdminProdutoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdutoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
