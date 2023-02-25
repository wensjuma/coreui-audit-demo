import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantAuditComponent } from './compliant-audit.component';

describe('CompliantAuditComponent', () => {
  let component: CompliantAuditComponent;
  let fixture: ComponentFixture<CompliantAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliantAuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompliantAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
