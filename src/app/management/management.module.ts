import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementMinsComponent } from './management-mins/management-mins.component';
import { ManagementFindingsComponent } from './management-findings/management-findings.component';
import { RiskAnalysisComponent } from './risk-analysis/risk-analysis.component';


@NgModule({
  declarations: [
    ManagementMinsComponent,
    ManagementFindingsComponent,
    RiskAnalysisComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
