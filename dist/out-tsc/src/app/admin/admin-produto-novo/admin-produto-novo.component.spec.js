import { async, TestBed } from '@angular/core/testing';
import { AdminProdutoNovoComponent } from './admin-produto-novo.component';
describe('AdminProdutoNovoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminProdutoNovoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminProdutoNovoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-produto-novo.component.spec.js.map