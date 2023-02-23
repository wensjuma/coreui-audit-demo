import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { CreateCompanyComponent } from './manage-companies/create-company/create-company.component';
import { ViewCompanyComponent } from './manage-companies/view-company/view-company.component';


@NgModule({
  declarations: [
    ManageCompaniesComponent,
    CreateCompanyComponent,
    ViewCompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompanyManagementRoutingModule
  ]
})
export class CompanyManagementModule { }
