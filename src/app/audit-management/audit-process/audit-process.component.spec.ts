import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProcessComponent } from './audit-process.component';

describe('AuditProcessComponent', () => {
  let component: AuditProcessComponent;
  let fixture: ComponentFixture<AuditProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
