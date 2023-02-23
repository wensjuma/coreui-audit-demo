import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateUsersComponent } from './manage-users/create-users/create-users.component';
import { ManageProfilesComponent } from './manage-profiles/manage-profiles.component';
import { CreateProfilesComponent } from './manage-profiles/create-profiles/create-profiles.component';
import { CreateRolesComponent } from './manage-roles/create-roles/create-roles.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';



const routes: Routes = [
  {
    path:'manage',
    component: ManageUsersComponent
  },

  {
    path:'create',
    component: CreateUsersComponent
  },
  {
    path:'profiles',
    component: ManageProfilesComponent
  },

  {
    path:'roles',
    component: ManageRolesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
