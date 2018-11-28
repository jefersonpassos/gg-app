import { async, TestBed } from '@angular/core/testing';
import { NavBarMobileComponent } from './nav-bar-mobile.component';
describe('NavBarMobileComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NavBarMobileComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NavBarMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nav-bar-mobile.component.spec.js.map