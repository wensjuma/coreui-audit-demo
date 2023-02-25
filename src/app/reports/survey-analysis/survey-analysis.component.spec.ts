import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnalysisComponent } from './survey-analysis.component';

describe('SurveyAnalysisComponent', () => {
  let component: SurveyAnalysisComponent;
  let fixture: ComponentFixture<SurveyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
