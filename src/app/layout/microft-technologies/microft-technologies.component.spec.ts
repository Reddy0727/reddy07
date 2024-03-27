import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroftTechnologiesComponent } from './microft-technologies.component';

describe('MicroftTechnologiesComponent', () => {
  let component: MicroftTechnologiesComponent;
  let fixture: ComponentFixture<MicroftTechnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroftTechnologiesComponent]
    });
    fixture = TestBed.createComponent(MicroftTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
