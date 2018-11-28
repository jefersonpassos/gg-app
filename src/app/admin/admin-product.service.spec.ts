import { TestBed, inject } from '@angular/core/testing';

import { AdminProductService } from './admin-product.service';

describe('AdminProdutoNovoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminProductService]
    });
  });

  it('should be created', inject([AdminProductService], (service: AdminProductService) => {
    expect(service).toBeTruthy();
  }));
});
