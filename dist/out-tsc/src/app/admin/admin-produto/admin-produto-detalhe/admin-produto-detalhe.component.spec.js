import { async, TestBed } from '@angular/core/testing';
import { AdminProdutoDetalheComponent } from './admin-produto-detalhe.component';
describe('AdminProdutoDetalheComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminProdutoDetalheComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminProdutoDetalheComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-produto-detalhe.component.spec.js.map