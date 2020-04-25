import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationViewComponent } from './user-location-view.component';

describe('UserLocationViewComponent', () => {
  let component: UserLocationViewComponent;
  let fixture: ComponentFixture<UserLocationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLocationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLocationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
