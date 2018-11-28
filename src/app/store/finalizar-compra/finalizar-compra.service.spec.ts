import { TestBed, inject } from '@angular/core/testing';

import { FinalizarCompraService } from './finalizar-compra.service';

describe('FinalizarCompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinalizarCompraService]
    });
  });

  it('should be created', inject([FinalizarCompraService], (service: FinalizarCompraService) => {
    expect(service).toBeTruthy();
  }));
});
