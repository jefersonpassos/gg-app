import { TestBed, inject } from '@angular/core/testing';
import { CarrinhoService } from './carrinho.service';
describe('CarrinhoService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CarrinhoService]
        });
    });
    it('should be created', inject([CarrinhoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=carrinho.service.spec.js.map