import { Input, Component } from '@angular/core';
import { Feedback } from '../../models/feedback';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.scss']
})
export class SubmitFeedbackComponent {

  @Input() feedback: Feedback;

}
