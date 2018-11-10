import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarAdComponent } from './edit-car-ad.component';

describe('EditCarAdComponent', () => {
  let component: EditCarAdComponent;
  let fixture: ComponentFixture<EditCarAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
