import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAdsComponent } from './list-user-ads.component';

describe('ListUserAdsComponent', () => {
  let component: ListUserAdsComponent;
  let fixture: ComponentFixture<ListUserAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
