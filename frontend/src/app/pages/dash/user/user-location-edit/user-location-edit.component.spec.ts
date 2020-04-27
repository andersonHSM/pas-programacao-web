import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationEditComponent } from './user-location-edit.component';

describe('UserLocationEditComponent', () => {
  let component: UserLocationEditComponent;
  let fixture: ComponentFixture<UserLocationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLocationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
