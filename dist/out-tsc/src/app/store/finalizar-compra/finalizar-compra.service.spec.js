import { TestBed, inject } from '@angular/core/testing';
import { FinalizarCompraService } from './finalizar-compra.service';
describe('FinalizarCompraService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [FinalizarCompraService]
        });
    });
    it('should be created', inject([FinalizarCompraService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=finalizar-compra.service.spec.js.map