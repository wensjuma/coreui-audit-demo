import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  form!: FormGroup
  formDetails: any;
  constructor(
    private formBuilder: FormBuilder
  ) { 
   
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Company_name: [''],
      Company_Location: [''],
      reg_no: [''],
      reg_date: [''],
      address: [''],
      email: [''],
      contact: [''],
      description: ['']
     })
     this.formDetails = JSON.parse(localStorage.getItem("companyDetails")!)
     console.log(this.formDetails);
     
     if(this.formDetails){
      console.log(">>>>>>>>>>reached");
      
      this.onEdit(this.formDetails)
     }
  }

  onEdit(value: any){

     this.form.patchValue({
      Company_name:value['name'],
      Company_Location:value['location'],
      reg_no:value['company_reg'],
      address:value['address'],
      contact:value['contact'],
      email:value['email'],
      description:value['description']
     })
  }

}
