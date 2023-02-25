import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMinsComponent } from './management-mins.component';

describe('ManagementMinsComponent', () => {
  let component: ManagementMinsComponent;
  let fixture: ComponentFixture<ManagementMinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementMinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
