import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactJSComponent } from './react-js.component';

describe('ReactJSComponent', () => {
  let component: ReactJSComponent;
  let fixture: ComponentFixture<ReactJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactJSComponent]
    });
    fixture = TestBed.createComponent(ReactJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
