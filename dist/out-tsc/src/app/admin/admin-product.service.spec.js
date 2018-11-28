import { TestBed, inject } from '@angular/core/testing';
import { AdminProductService } from './admin-product.service';
describe('AdminProdutoNovoService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AdminProductService]
        });
    });
    it('should be created', inject([AdminProductService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-product.service.spec.js.map