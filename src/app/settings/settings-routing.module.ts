import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditParametersComponent } from './audit-parameters/audit-parameters.component';
import { CountiesComponent } from './counties/counties.component';
import { TownsComponent } from './towns/towns.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path:'audit-params',
    component: AuditParametersComponent
  },
  {
    path:'counties',
    component: CountiesComponent
  },
  {
    path:'towns',
    component: TownsComponent
  },
  {
    path:'notifications',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
