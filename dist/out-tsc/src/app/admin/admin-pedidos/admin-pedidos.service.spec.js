import { TestBed, inject } from '@angular/core/testing';
import { AdminPedidosService } from './admin-pedidos.service';
describe('AdminPedidosService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AdminPedidosService]
        });
    });
    it('should be created', inject([AdminPedidosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin-pedidos.service.spec.js.map