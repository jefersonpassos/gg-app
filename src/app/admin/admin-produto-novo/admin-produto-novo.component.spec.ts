import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutoNovoComponent } from './admin-produto-novo.component';

describe('AdminProdutoNovoComponent', () => {
  let component: AdminProdutoNovoComponent;
  let fixture: ComponentFixture<AdminProdutoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdutoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
