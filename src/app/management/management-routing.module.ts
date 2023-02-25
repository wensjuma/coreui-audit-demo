import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementMinsComponent } from './management-mins/management-mins.component';
import { ManagementFindingsComponent } from './management-findings/management-findings.component';
import { RiskAnalysisComponent } from './risk-analysis/risk-analysis.component';

const routes: Routes = [
  {
    path:'minutes',
    component: ManagementMinsComponent
  },
  {
    path:'findings',
    component: ManagementFindingsComponent
  },

  {
    path:'risk',
    component: RiskAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
