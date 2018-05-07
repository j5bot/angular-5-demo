import { Output, Component, OnChanges, EventEmitter } from '@angular/core';
import { MatFormField, MatRipple } from '@angular/material';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.scss']
})
export class EnterFeedbackComponent implements OnChanges {

  feedbackForm: FormGroup;
  @Output() onChange = new EventEmitter<any>();

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
    // const nameControl = feedbackForm.get('name');
    // console.log(nameControl);
    // nameControl.valueChanges.forEach(
    //   (value: string) => {
    //     console.log(`name now ${ value }`);
    //     this.formChanged.emit({ field: 'name', value });
    //   }
    // )
  }

  setupEmitOnChange () {
    Object.keys(this.formDefinition).map( (field) => {
      console.log(`subscribing to ${ field }`);
      const fieldControl: FormControl = this.feedbackForm.get(field);
      fieldControl.valueChanges.forEach(
        (value: string) => {
          // debugger;
          this.onChange.emit({ field, value });
        }
      )
    };
  }

}
