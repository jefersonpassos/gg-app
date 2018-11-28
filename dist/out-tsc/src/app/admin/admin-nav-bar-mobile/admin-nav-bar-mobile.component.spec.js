import { async, TestBed } from '@angular/core/testing';
import { AdminNavBarMobileComponent } from './admin-nav-bar-mobile.component';
describe('AdminNavBarMobileComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminNavBarMobileComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminNavBarMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-nav-bar-mobile.component.spec.js.map