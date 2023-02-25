import { Component } from '@angular/core';
import { feedback } from '../../audit-management/audit-details.data';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {
  feedbackDetails = feedback;
constructor(){

}
}
