import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateUsersComponent } from './manage-users/create-users/create-users.component';
import { SharedModule } from '../shared/shared.module';

import { ViewUsersComponent } from './manage-users/view-users/view-users.component';
import { CreateProfilesComponent } from './manage-profiles/create-profiles/create-profiles.component';
import { ManageProfilesComponent } from './manage-profiles/manage-profiles.component';
import { CreateRolesComponent } from './manage-roles/create-roles/create-roles.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ManageUsersComponent,
    CreateUsersComponent,
    ManageProfilesComponent,
    ManageRolesComponent,
    CreateRolesComponent,
    CreateProfilesComponent,
    ViewUsersComponent
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
