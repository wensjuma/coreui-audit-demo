import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementFindingsComponent } from './management-findings.component';

describe('ManagementFindingsComponent', () => {
  let component: ManagementFindingsComponent;
  let fixture: ComponentFixture<ManagementFindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementFindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
