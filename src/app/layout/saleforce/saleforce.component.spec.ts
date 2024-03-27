import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleforceComponent } from './saleforce.component';

describe('SaleforceComponent', () => {
  let component: SaleforceComponent;
  let fixture: ComponentFixture<SaleforceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleforceComponent]
    });
    fixture = TestBed.createComponent(SaleforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
