import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimeSlotComponent } from './admin-time-slot.component';

describe('AdminTimeSlotComponent', () => {
  let component: AdminTimeSlotComponent;
  let fixture: ComponentFixture<AdminTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
