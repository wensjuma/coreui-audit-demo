import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-parameterize-audit',
  templateUrl: './parameterize-audit.component.html',
  styleUrls: ['./parameterize-audit.component.scss']
})
export class ParameterizeAuditComponent {
  form!: FormGroup;
  details! : string ;
  constructor(
    @Inject(MAT_DIALOG_DATA) public _data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      Parameter_Name: ['', Validators.required],
      Parameter_Type: ['', Validators.required], //(Laboratory, Observation, Others)
      Parameter_Description: [''],
      Result: [null, Validators.required], //(very Good, Good, Average, Bad, Very Bad)
      Inpection_Remarks: [null, Validators.required],
      Lab_Result: [null, Validators.required], //(Compliant, Non-Compliant)
      Lab_Remarks: [null, Validators.required],
    });
  }
  auditSubmit(){
    alert('Audit submitted successfully');
  }
}
