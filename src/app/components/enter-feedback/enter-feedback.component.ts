import { Input, Output, Component, EventEmitter } from '@angular/core';
import { MatFormField, MatRipple } from '@angular/material';
import { MatInput } from '@angular/material/input';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.scss']
})
export class EnterFeedbackComponent {

  feedbackForm: FormGroup;
  @Output() onChange = new EventEmitter<any>();
  name: string;
  ffJSON: string;
  feedback: string;

  constructor ( private formBuilder: FormBuilder) {
    this.createForm();
  }

  formDefinition = {
    name: [''],
    phone: [''],
    email: [''],
    feedback: ['', Validators.required ]
  };

  createForm () {
    this.feedbackForm = this.formBuilder.group( this.formDefinition );
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

  setupEmitOnChange () {
    Object.keys(this.formDefinition).map( (field) => {
      const fieldControl: AbstractControl = this.feedbackForm.get(field);
      fieldControl.valueChanges.forEach(
        (value: string) => {
          this.onChange.emit({ field, value });
        }
      );
    });
  }

}
