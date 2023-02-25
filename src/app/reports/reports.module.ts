import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { CompliantAuditComponent } from './compliant-audit/compliant-audit.component';
import { ActivityAuditComponent } from './activity-audit/activity-audit.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';


@NgModule({
  declarations: [
    CompliantAuditComponent,
    ActivityAuditComponent,
    SurveyAnalysisComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
