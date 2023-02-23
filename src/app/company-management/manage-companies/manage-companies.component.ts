import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { companyDetails } from '../../audit-management/audit-details.data';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.scss'],
})
export class ManageCompaniesComponent implements OnInit {
  companiesDetails = companyDetails;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  view(item:any){
    localStorage.setItem('companyDetails', JSON.stringify(item));
   this.router.navigate(['companies/view/', item.id])
  }
  openCreate() {
    // localStorage.setItem('companyDetails', JSON.stringify())
    this.router.navigate(['companies/create-company']);
  }
  openEdit(item:any) {
    localStorage.setItem('companyDetails', JSON.stringify(item))
    this.router.navigate(['companies/update/', item.id]);
  }
  openRolesPage() {}
  openProfilesPage() {}
}
