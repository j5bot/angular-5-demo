import { Input, Output, Component, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  PHONE_VALIDATION, PHONE_VALIDATION_ALLOW_EMPTY
} from '../../../utilities/regexes';

import { Feedback, FeedbackChange } from '../../models/feedback';

const emailValidator = (control: AbstractControl) => {
  if (!control.value) {
    return null;
  }
  return Validators.email(control);
};

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.scss']
})
export class EnterFeedbackComponent {

  @Input() feedback: Feedback;
  @Output() onChange = new EventEmitter<FeedbackChange>();
  @Output() onValidate = new EventEmitter<boolean>();
  feedbackForm: FormGroup;

  constructor ( private formBuilder: FormBuilder) {
    this.createForm();
  }

  formDefinition = {
    name: [''],
    phone: ['', Validators.pattern( PHONE_VALIDATION ) ],
    email: ['', emailValidator ],
    feedback: ['', Validators.required ]
  };

  createForm () {
    this.feedbackForm = this.formBuilder.group( this.formDefinition );
    if ( this.feedback ) {
      this.feedbackForm.setValue( this.feedback );
    }
    this.setupEmitOnChange();
    this.setupEmitOnValidate();
  }

  changeValue (field, value) {
    this.onChange.emit({ field, value });
  }

  setValid (value) {
    this.onValidate.emit(
      value === 'INVALID' ?
        false : true );
  }

  setupEmitOnChange () {
    Object.keys(this.formDefinition).map( (field) => {
      const fieldControl: AbstractControl = this.feedbackForm.get(field);
      fieldControl.valueChanges.forEach(
        (value: string) => {
          this.changeValue(field, value);
        }
      );
    });
  }

  setupEmitOnValidate () {
    this.feedbackForm.statusChanges.forEach(
      (value: string) => {
        this.setValid(value);
      }
    );
  }

}
