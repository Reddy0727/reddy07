import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopComponent } from './software-develop.component';

describe('SoftwareDevelopComponent', () => {
  let component: SoftwareDevelopComponent;
  let fixture: ComponentFixture<SoftwareDevelopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareDevelopComponent]
    });
    fixture = TestBed.createComponent(SoftwareDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
