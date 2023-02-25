import { Component, OnInit } from '@angular/core';
import { complains } from 'src/app/audit-management/audit-details.data';
import { auditDetails } from '../../../audit-management/audit-details.data';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleAuditComponent } from '../schedule-audit/schedule-audit.component';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit {
  details: any;
  complains =  complains;
  auditDetails: any;
  constructor(
    private dialog: MatDialog
  ) {
    this.details = JSON.parse(localStorage.getItem('companyDetails')!);
   }

  ngOnInit(): void {
    this.auditDetails =   auditDetails.filter((item)=>item.id === this.details.id)

  }
  scheduleAudit(item: any){
    this.dialog.open(ScheduleAuditComponent,{
      width:"450px",
      data:item
    })
  }

}
