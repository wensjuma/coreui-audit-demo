import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  openCreate(){
    this.route.navigate(['/users/create'])
  }
  openProfilesPage(){
    this.route.navigate(['/users/profiles'])
  }
  openRolesPage(){
    this.route.navigate(['/users/roles'])
  }

}
