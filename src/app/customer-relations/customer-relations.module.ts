import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRelationsRoutingModule } from './customer-relations-routing.module';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { SurveysComponent } from './surveys/surveys.component';
import { ComplainsComponent } from './complains/complains.component';


@NgModule({
  declarations: [
    FeedbacksComponent,
    SurveysComponent,
    ComplainsComponent
  ],
  imports: [
    CommonModule,
    CustomerRelationsRoutingModule
  ]
})
export class CustomerRelationsModule { }
