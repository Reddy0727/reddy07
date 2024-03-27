import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffComponent } from './it-staff.component';

describe('ItStaffComponent', () => {
  let component: ItStaffComponent;
  let fixture: ComponentFixture<ItStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItStaffComponent]
    });
    fixture = TestBed.createComponent(ItStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
