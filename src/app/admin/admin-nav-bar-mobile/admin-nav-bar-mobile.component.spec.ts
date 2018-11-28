import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavBarMobileComponent } from './admin-nav-bar-mobile.component';

describe('AdminNavBarMobileComponent', () => {
  let component: AdminNavBarMobileComponent;
  let fixture: ComponentFixture<AdminNavBarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavBarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
