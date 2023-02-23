import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-start-audit',
  templateUrl: './start-audit.component.html',
  styleUrls: ['./start-audit.component.scss']
})
export class StartAuditComponent {
  formGroup!: FormGroup
   constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public _data: any
   ){
      this.formGroup = this.fb.group({
        company_name: [],
        number_employees: [''],
        kra_pin:[''],
        kra_status: [''],
        product_type:[''],
        product_builders:[''],
        lifespan:['']
      })
   }
   ngOnInit(): void {
    console.log(this._data);
    
    
   }

}
