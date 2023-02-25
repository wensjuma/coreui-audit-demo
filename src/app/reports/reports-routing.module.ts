import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompliantAuditComponent } from './compliant-audit/compliant-audit.component';
import { ActivityAuditComponent } from './activity-audit/activity-audit.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';

const routes: Routes = [
{
  path:'c-audits',
  component: CompliantAuditComponent
},
{
  path:'activity-audit',
  component: ActivityAuditComponent
},
{
  path:'survey/analysis',
  component: SurveyAnalysisComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
