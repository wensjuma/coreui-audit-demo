import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditParametersComponent } from './audit-parameters.component';

describe('AuditParametersComponent', () => {
  let component: AuditParametersComponent;
  let fixture: ComponentFixture<AuditParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
