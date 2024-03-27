import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDBComponent } from './mongo-db.component';

describe('MongoDBComponent', () => {
  let component: MongoDBComponent;
  let fixture: ComponentFixture<MongoDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MongoDBComponent]
    });
    fixture = TestBed.createComponent(MongoDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
