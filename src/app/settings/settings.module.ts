import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { TownsComponent } from './towns/towns.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuditParametersComponent } from './audit-parameters/audit-parameters.component';
import { CountiesComponent } from './counties/counties.component';


@NgModule({
  declarations: [
    TownsComponent,
    NotificationsComponent,
    AuditParametersComponent,
    CountiesComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
