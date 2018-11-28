import { TestBed, inject } from '@angular/core/testing';
import { ProdutoService } from './produto.service';
describe('ProdutoService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ProdutoService]
        });
    });
    it('should be created', inject([ProdutoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=produto.service.spec.js.map