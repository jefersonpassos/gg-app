import { async, TestBed } from '@angular/core/testing';
import { AdminPedidosDetalheComponent } from './admin-pedidos-detalhe.component';
describe('AdminPedidosDetalheComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminPedidosDetalheComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminPedidosDetalheComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-pedidos-detalhe.component.spec.js.map