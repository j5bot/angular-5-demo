import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css']
})
export class SubmitFeedbackComponent {

  enteredFeedback: string;

  makeChanges() {
    // Back to EnterFeedbackComponent with enteredFeedback prefilled.
  }

  submit() {
    // No API call needed, simply dismiss the feedback flow.
  }
}
