import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterizeAuditComponent } from './parameterize-audit.component';

describe('ParameterizeAuditComponent', () => {
  let component: ParameterizeAuditComponent;
  let fixture: ComponentFixture<ParameterizeAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterizeAuditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterizeAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
