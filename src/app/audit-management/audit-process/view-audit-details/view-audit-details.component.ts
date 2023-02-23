import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ParameterizeAuditComponent } from '../parameterize-audit/parameterize-audit.component';
import { auditParamsData } from '../../audit-details.data';

@Component({
  selector: 'app-view-audit-details',
  templateUrl: './view-audit-details.component.html',
  styleUrls: ['./view-audit-details.component.scss'],
})
export class ViewAuditDetailsComponent {
  auditParams: any = auditParamsData;
  formGroup!: FormGroup;
  details : any;
  myDetails: any;
  constructor(
    private dialog: MatDialog,
  
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      Parameter_Name: [''],
      Parameter_Type: [''], //(Laboratory, Observation, Others)
      Parameter_Description: [''],
      Result: [null], //(very Good, Good, Average, Bad, Very Bad)
      Inpection_Remarks: [null],
      Lab_Result: [null], //(Compliant, Non-Compliant)
      Lab_Remarks: [null],
    });
  }
  ngOnInit(): void {
    this.details = JSON.parse(localStorage.getItem('auditDetails')!);
   this.myDetails = this.auditParams.filter((er:any)=> er.id ===this.details['id']);
  }
  audit(details: any){
    this.dialog.open(ParameterizeAuditComponent, {
      width:'600px',
      data:details
    })
  }
}
