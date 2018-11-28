import { TestBed, inject } from '@angular/core/testing';

import { AdminPedidosService } from './admin-pedidos.service';

describe('AdminPedidosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPedidosService]
    });
  });

  it('should be created', inject([AdminPedidosService], (service: AdminPedidosService) => {
    expect(service).toBeTruthy();
  }));
});
