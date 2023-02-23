import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-profiles',
  templateUrl: './create-profiles.component.html',
  styleUrls: ['./create-profiles.component.scss']
})
export class CreateProfilesComponent implements OnInit {
formGroup!:FormGroup
  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    this.formGroup= this.formbuilder.group({
      name:[ this.data? this.data.name:null ],
      description:[null, this.data? this.data.description: null ]
    })

  }

}
