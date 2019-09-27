import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeSlotComponent } from './user-time-slot.component';

describe('UserTimeSlotComponent', () => {
  let component: UserTimeSlotComponent;
  let fixture: ComponentFixture<UserTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
