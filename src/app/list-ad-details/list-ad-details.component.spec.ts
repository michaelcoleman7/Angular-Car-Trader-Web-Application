import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdDetailsComponent } from './list-ad-details.component';

describe('ListAdDetailsComponent', () => {
  let component: ListAdDetailsComponent;
  let fixture: ComponentFixture<ListAdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
