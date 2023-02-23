import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfilesComponent } from './create-profiles/create-profiles.component';

@Component({
  selector: 'app-manage-profiles',
  templateUrl: './manage-profiles.component.html',
  styleUrls: ['./manage-profiles.component.scss']
})
export class ManageProfilesComponent implements OnInit {
profileDetails =[
  {
    name:"Audit Profile",
    description:"auditing processes",
    users: "10"
  },
  {
    name:"Help desk",
    description:"Customer assistance",
    users: "15"
  },
  {
    name:"Admin",
    description:"Administarative task",
    users: "4"
  },
]
  constructor(  private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  view(thisData: any){
    thisData
  }
  edit(thisData: any){
    this.dialog.open(CreateProfilesComponent, {
      width: '550px',
      data:thisData
    });
  }
  deleteItem(item: any){

  }


  openCreate(enterAnimationDuration = '500', exitAnimationDuration='500'){
    
    this.dialog.open(CreateProfilesComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
