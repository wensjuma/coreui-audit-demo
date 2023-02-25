import { Component } from '@angular/core';
import { counties } from '../../audit-management/audit-details.data';

@Component({
  selector: 'app-counties',
  templateUrl: './counties.component.html',
  styleUrls: ['./counties.component.scss']
})
export class CountiesComponent {
 counties = counties;

 openEdit(det: any){

 }
 view(det: any){}
}
