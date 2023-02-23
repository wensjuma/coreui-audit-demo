import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditProcessComponent } from './audit-process/audit-process.component';
import { StartAuditComponent } from './start-audit/start-audit.component';
import { ViewAuditDetailsComponent } from './audit-process/view-audit-details/view-audit-details.component';

const routes: Routes = [
  {
    path:'process',
    component:AuditProcessComponent
  },
  {
    path:'view/:id',
    component:ViewAuditDetailsComponent
  },
  {
    path:'initiate',
    component:StartAuditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditManagementRoutingModule { }
