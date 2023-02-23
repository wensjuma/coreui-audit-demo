import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CreateRolesComponent } from './create-roles/create-roles.component';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openCreateRole(enterAnimationDuration = '500', exitAnimationDuration='500'){
    
    this.dialog.open(CreateRolesComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
