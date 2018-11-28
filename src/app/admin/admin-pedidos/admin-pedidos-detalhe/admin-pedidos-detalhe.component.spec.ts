import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPedidosDetalheComponent } from './admin-pedidos-detalhe.component';

describe('AdminPedidosDetalheComponent', () => {
  let component: AdminPedidosDetalheComponent;
  let fixture: ComponentFixture<AdminPedidosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPedidosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPedidosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
