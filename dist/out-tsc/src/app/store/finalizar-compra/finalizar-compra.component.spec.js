import { async, TestBed } from '@angular/core/testing';
import { FinalizarCompraComponent } from './finalizar-compra.component';
describe('FinalizarCompraComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FinalizarCompraComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FinalizarCompraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=finalizar-compra.component.spec.js.map