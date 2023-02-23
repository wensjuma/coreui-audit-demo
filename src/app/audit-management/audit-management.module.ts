import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditManagementRoutingModule } from './audit-management-routing.module';
import { AuditProcessComponent } from './audit-process/audit-process.component';
import { StartAuditComponent } from './start-audit/start-audit.component';
import { SharedModule } from '../shared/shared.module';
import { ViewAuditDetailsComponent } from './audit-process/view-audit-details/view-audit-details.component';
import { ParameterizeAuditComponent } from './audit-process/parameterize-audit/parameterize-audit.component';


@NgModule({
  declarations: [
    AuditProcessComponent,
    StartAuditComponent,
    ViewAuditDetailsComponent,
    ParameterizeAuditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuditManagementRoutingModule
  ]
})
export class AuditManagementModule { }
