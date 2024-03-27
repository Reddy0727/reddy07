import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDevelopmentComponent } from './python-development.component';

describe('PythonDevelopmentComponent', () => {
  let component: PythonDevelopmentComponent;
  let fixture: ComponentFixture<PythonDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonDevelopmentComponent]
    });
    fixture = TestBed.createComponent(PythonDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
