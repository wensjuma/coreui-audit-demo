import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { ViewCompanyComponent } from './manage-companies/view-company/view-company.component';
import { CreateCompanyComponent } from './manage-companies/create-company/create-company.component';

const routes: Routes = [
  {
    path:'manage',
    component: ManageCompaniesComponent
  },
  {
    path:'create-company',
    component: CreateCompanyComponent
  },
  {
    path:'update/:id',
    component: CreateCompanyComponent
  },
  {
    path:'view/:id',
    component: ViewCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyManagementRoutingModule { }
