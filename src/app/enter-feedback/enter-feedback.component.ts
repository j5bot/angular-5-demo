import { Component } from '@angular/core';

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.css']
})
export class EnterFeedbackComponent {

  enteredFeedback: string;

  done() {
    // TODO: Transition to SubmitFeedbackComponent to verify feedback
  }

}
