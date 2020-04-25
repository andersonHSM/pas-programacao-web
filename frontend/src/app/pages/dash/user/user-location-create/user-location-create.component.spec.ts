import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLocationCreateComponent } from './user-location-create.component';

describe('UserLocationCreateComponent', () => {
  let component: UserLocationCreateComponent;
  let fixture: ComponentFixture<UserLocationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLocationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLocationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
