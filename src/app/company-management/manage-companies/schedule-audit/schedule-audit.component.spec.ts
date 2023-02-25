import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAuditComponent } from './schedule-audit.component';

describe('ScheduleAuditComponent', () => {
  let component: ScheduleAuditComponent;
  let fixture: ComponentFixture<ScheduleAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleAuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
