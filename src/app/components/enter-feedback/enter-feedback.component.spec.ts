import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { marbles } from 'rxjs-marbles/jest';

import { Observable } from 'rxjs/Observable';
import {
  AbstractControl,
  ReactiveFormsModule
} from '@angular/forms';

import { MaterialModule } from '../../../modules/material-module';
import { EnterFeedbackComponent } from './enter-feedback.component';

describe('EnterFeedbackComponent', () => {
  let fixture: ComponentFixture<EnterFeedbackComponent>;
  let instance: EnterFeedbackComponent;

  const EMPTY_FORM = {
    name: '',
    phone: '',
    email: '',
    feedback: ''
  };

  const STORED_FEEDBACK = {
    name: 'Matt Groening',
    phone: '555-555-1212',
    email: 'matt@bongocomics.com',
    feedback:
    `I just had a few things to say and so I thought ...

    "You know, why not say them?"`
  };

  const CHANGES = {
    name: 'Homer J.',
    phone: '(555) 555-1212 # 1234',
    email: 'homerj@bongocomics.com',
    feedback: `I for one embrace our new insect overlords.`
  };

  const ERRORS = {
    phone: '555-1212 something not so good',
    email: 'notanemail.address',
    feedback: null
  };

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      declarations: [
        EnterFeedbackComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterFeedbackComponent);
    instance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not be undefined', () => {
    expect(instance).toBeTruthy();
  });

  /**
  * Container components are used as integration points for connecting
  * the store to presentational components and dispatching
  * actions to the store.
  *
  * Container methods that dispatch events are like a component's output
  * observables.  Container properties that select state from store are like a
  * component's input properties.  If pure components are functions of their
  * inputs, containers are functions of state
  *
  * Traditionally you would query the components rendered template
  * to validate its state. Since the components are analogous to
  * pure functions, we take snapshots of these components for a given state
  * to validate the rendered output and verify the component's output
  * against changes in state.
  */
  it('should match previous snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('should emit onchange events when values change', () => {

    Object.keys(CHANGES).forEach(
      (prop) => {
        it(`should emit a ${ prop } change event when setting the ${ prop }`,
          () => {
            const control: AbstractControl = instance.feedbackForm.controls[ prop ];
            spyOn(instance, 'changeValue');

            //             console.log(`control ${ prop }
            // errors: ${ JSON.stringify(control.errors) }
            // valid: ${ control.valid }
            // value: ${ control.value }
            // status: ${ control.status }
            // pristine: ${ control.pristine }
            // untouched: ${ control.untouched }`);

            control.setValue(CHANGES[ prop ]);

            fixture.detectChanges();

            expect(instance.changeValue).toHaveBeenCalledWith(prop, CHANGES[ prop ]);
            const errors = control.errors || {};

            //             console.log(`compare ${ prop }
            // errors: ${ JSON.stringify(control.errors) }
            // valid: ${ control.valid }
            // value: ${ control.value }
            // status: ${ control.status }
            // pristine: ${ control.pristine }
            // untouched: ${ control.untouched }`);

            expect(control.valid).toBeTrue();
            expect(control.errors).toBeNull();
          }
        );
      }
    );

    Object.keys(ERRORS).forEach(
      (prop) => {
        it(`should have a ${ prop } error property after setting the ${ prop }`,
          () => {
            const control: AbstractControl = instance.feedbackForm.controls[ prop ];

            spyOn(instance, 'changeValue');

            //             console.log(`control ${ prop }
            // errors: ${ JSON.stringify(control.errors) }
            // valid: ${ control.valid }
            // value: ${ control.value }
            // status: ${ control.status }
            // pristine: ${ control.pristine }
            // untouched: ${ control.untouched }`);

            control.setValue(ERRORS[ prop ]);

            fixture.detectChanges();

            expect(instance.changeValue).toHaveBeenCalledWith(prop, ERRORS[ prop ]);
            const errors = control.errors;

            //             console.log(`control ${ prop }
            // errors: ${ JSON.stringify(control.errors) }
            // valid: ${ control.valid }
            // value: ${ control.value }
            // status: ${ control.status }
            // pristine: ${ control.pristine }
            // untouched: ${ control.untouched }`);

            expect(errors).toBeObject();
            expect(control.valid).toBeFalse();
          });
        }
      );
    }
  );
});
