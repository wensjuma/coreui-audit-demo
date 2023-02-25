import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { SurveysComponent } from './surveys/surveys.component';
import { ComplainsComponent } from './complains/complains.component';

const routes: Routes = [
  {
    path:'feedback',
    component: FeedbacksComponent
  },
  {
    path:'surveys',
    component:SurveysComponent
  },
  {
    path:'complains',
    component:ComplainsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRelationsRoutingModule { }
