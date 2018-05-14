import { Input, Output, Component, EventEmitter } from '@angular/core';
import { MatFormField, MatRipple } from '@angular/material';
import { MatInput } from '@angular/material/input';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  PHONE_VALIDATION, PHONE_VALIDATION_ALLOW_EMPTY
} from '../../../utilities/regexes';

const emailValidator = (c: AbstractControl) => {
  if (!c.value) {
    return null;
  }
  return Validators.email(c);
};

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.scss']
})
export class EnterFeedbackComponent {

  @Input() feedback: any;
  @Output() onChange = new EventEmitter<any>();
  feedbackForm: FormGroup;
  name: string;
  ffJSON: string;

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

    const fields = ['name', 'feedback'];
    fields.map( (field: string) => {
      const formControl = this.feedbackForm.get(field);
      formControl.valueChanges.forEach(
        (value: string) => {
          this[field] = value;
          this.ffJSON = `
          ${ Object.keys(this.feedbackForm).join(', ') } |
          ${ JSON.stringify(this.feedbackForm.value) }
          `;
        }
      );
    });
  }

  getFormControl (name) {
    return this.feedbackForm.controls[ name ] || { errors: {} };
  }

  changeValue (field, value) {
    debugger;
    this.onChange.emit({ field, value });
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

}
