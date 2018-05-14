import {
  async, ComponentFixture, ComponentFixtureAutoDetect, TestBed
} from '@angular/core/testing';
import {
  Input, Output,
  DebugElement
} from '@angular/core';
import {By} from "@angular/platform-browser";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { marbles } from 'rxjs-marbles/jest';

import { StoreModule, Store } from '@ngrx/store';
<<<<<<< Updated upstream
import { reducers, State } from '../../reducers';
import { Observable } from 'rxjs/observable';
=======
import { Observable } from 'rxjs/Observable';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

>>>>>>> Stashed changes
import { MaterialModule } from '../../../modules/material-module';

import { testObservable } from '../../../../modules/test-utilities';
import { reducers, State } from '../../reducers';

import { EnterFeedbackComponent } from './enter-feedback.component';

// import * as FeedbackActions from '../../actions/feedback';
// import * as selectors from '../../selectors/selectors';

describe('EnterFeedbackComponent', () => {
  let fixture: ComponentFixture<EnterFeedbackComponent>;
  let instance: EnterFeedbackComponent;
  let debugElement: DebugElement;

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
    feedback: 42
  };

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      declarations: [
        EnterFeedbackComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, value: true }
      ]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(EnterFeedbackComponent);
    instance = fixture.componentInstance;
    debugElement = fixture.debugElement;
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
  it('should match previous snapshot', async(() => {
    expect(fixture).toMatchSnapshot();
  }));

  describe('should emit onchange events when values change', () => {

    // let prop;
    // Object.keys(CHANGES).forEach(
    //   function (prop) {
    it(`should emit a name change event when setting the name`,
    async(() => {
      const prop = 'name';
      const control: AbstractControl = instance.feedbackForm.controls[ prop ];
      spyOn(instance, 'changeValue');
      // instance.feedbackForm.setValue( { [prop]: CHANGES[ prop ] } );
      console.log(`control ${ prop }
      errors: ${ JSON.stringify(control.errors) }
      valid: ${ control.valid }
      value: ${ control.value }
      status: ${ control.status }
      pristine: ${ control.pristine }
      untouched: ${ control.untouched }`);

      control.setValue(CHANGES[ prop ]);
      instance.changeValue( prop, CHANGES[ prop ] );

      fixture.detectChanges();
      fixture.whenStable().then( () => {

        const compare: AbstractControl = instance.feedbackForm.controls[ prop ];
        fixture.whenStable();

        expect(instance.changeValue).toHaveBeenCalledWith(prop, CHANGES[ prop ]);
        const errors = compare.errors || {};
        console.log(`compare ${ prop }
errors: ${ JSON.stringify(compare.errors) }
valid: ${ compare.valid }
value: ${ compare.value }
status: ${ compare.status }
pristine: ${ compare.pristine }
untouched: ${ compare.untouched }`);
          //  expect(control.valid).toBeTrue();
        });
      }
    ));
    //   }
    // );


    // Object.keys(CHANGES).forEach(
    //   function (prop) {
    it(`should emit a name change event when setting the name`,
    async( () => {
      const prop = 'phone';
      const control: AbstractControl = instance.feedbackForm.controls[ prop ];
      spyOn(instance, 'changeValue');
      // instance.feedbackForm.setValue( { [prop]: CHANGES[ prop ] } );
      console.log(`control ${ prop }
errors: ${ JSON.stringify(control.errors) }
valid: ${ control.valid }
value: ${ control.value }
status: ${ control.status }
pristine: ${ control.pristine }
untouched: ${ control.untouched }`);

      control.setValue(CHANGES[ prop ]);
      instance.changeValue( prop, CHANGES[ prop ] );

      fixture.detectChanges();
      fixture.whenStable().then( () => {
        fixture.detectChanges();

        expect(instance.changeValue).toHaveBeenCalledWith(prop, CHANGES[ prop ]);
        const errors = control.errors || {};
        console.log(`control ${ prop }
errors: ${ JSON.stringify(control.errors) }
valid: ${ control.valid }
value: ${ control.value }
status: ${ control.status }
pristine: ${ control.pristine }
untouched: ${ control.untouched }`);
          //  expect(control.valid).toBeTrue();
        });
      }
    ));



    // Object.keys(CHANGES).forEach(
    //   function (prop) {
    it(`should emit a email change event when setting the email`,
    async( () => {
      const prop = 'email';
      const control: AbstractControl = instance.feedbackForm.controls[ prop ];
      spyOn(instance, 'changeValue');
      // instance.feedbackForm.setValue( { [prop]: CHANGES[ prop ] } );
      console.log(`control ${ prop }
      errors: ${ JSON.stringify(control.errors) }
      valid: ${ control.valid }
      value: ${ control.value }
      status: ${ control.status }
      pristine: ${ control.pristine }
      untouched: ${ control.untouched }`);

      control.setValue(CHANGES[ prop ]);
      instance.changeValue( prop, CHANGES[ prop ] );

      fixture.detectChanges();
      fixture.whenStable().then( () => {
        fixture.detectChanges();

        expect(instance.changeValue).toHaveBeenCalledWith(prop, CHANGES[ prop ]);
        const errors = control.errors || {};
        console.log(`control ${ prop }
          errors: ${ JSON.stringify(control.errors) }
          valid: ${ control.valid }
          value: ${ control.value }
          status: ${ control.status }
          pristine: ${ control.pristine }
          untouched: ${ control.untouched }`);
          //  expect(control.valid).toBeTrue();
        });
      }
    ));



    // Object.keys(CHANGES).forEach(
    //   function (prop) {
    it(`should emit a feedback change event when setting the feedback`,
    async( () => {
      const prop = 'feedback';
      const control: AbstractControl = instance.feedbackForm.controls[ prop ];
      spyOn(instance, 'changeValue');
      // instance.feedbackForm.setValue( { [prop]: CHANGES[ prop ] } );
      console.log(`control ${ prop }
      errors: ${ JSON.stringify(control.errors) }
      valid: ${ control.valid }
      value: ${ control.value }
      status: ${ control.status }
      pristine: ${ control.pristine }
      untouched: ${ control.untouched }`);

      control.setValue(CHANGES[ prop ]);
      instance.changeValue( prop, CHANGES[ prop ] );

      fixture.detectChanges();
      fixture.whenStable().then( () => {
        fixture.detectChanges();

        expect(instance.changeValue).toHaveBeenCalledWith(prop, CHANGES[ prop ]);
        const errors = control.errors || {};
        console.log(`control ${ prop }
          validators: ${ control.validators }
          errors: ${ JSON.stringify(control.errors) }
          valid: ${ control.valid }
          value: ${ control.value }
          status: ${ control.status }
          pristine: ${ control.pristine }
          untouched: ${ control.untouched }`);
          //  expect(control.valid).toBeTrue();
        });
      }
    ));



    // Object.keys(ERRORS).forEach(
    //   function (prop) {
    it(`should have a phone error property after setting the phone`,
    async( () => {
      const prop = 'phone';
      const control: AbstractControl = instance.feedbackForm.controls[ prop ];
      spyOn(instance, 'changeValue');
      console.log(`control ${ prop }
        errors: ${ JSON.stringify(control.errors) }
        valid: ${ control.valid }
        value: ${ control.value }
        status: ${ control.status }
        pristine: ${ control.pristine }
        untouched: ${ control.untouched }`);

        control.setValue(ERRORS[ prop ]);
        // instance.feedbackForm.setValue( { [prop]: ERRORS[ prop ] } );
        instance.changeValue( prop, ERRORS[ prop ] );

        fixture.detectChanges();
        fixture.whenStable().then( () => {
          fixture.detectChanges();

          expect(instance.changeValue).toHaveBeenCalledWith(prop, ERRORS[ prop ]);
          const errors = control.errors;
          console.log(`control ${ prop }
            validators: ${ control.validators }
            errors: ${ JSON.stringify(control.errors) }
            valid: ${ control.valid }
            value: ${ control.value }
            status: ${ control.status }
            pristine: ${ control.pristine }
            untouched: ${ control.untouched }`);
            // expect(errors).toBeObject();
          });
        }
      ));
      //   }
      // );


      // Object.keys(ERRORS).forEach(
      //   function (prop) {
      it(`should have a email error property after setting the email`,
      async( () => {
        const prop = 'email';
        const control: AbstractControl = instance.feedbackForm.controls[ prop ];
        spyOn(instance, 'changeValue');
        console.log(`control ${ prop }
          errors: ${ JSON.stringify(control.errors) }
          valid: ${ control.valid }
          value: ${ control.value }
          status: ${ control.status }
          pristine: ${ control.pristine }
          untouched: ${ control.untouched }`);

          control.setValue(ERRORS[ prop ]);
          // instance.feedbackForm.setValue( { [prop]: ERRORS[ prop ] } );
          instance.changeValue( prop, ERRORS[ prop ] );

          fixture.detectChanges();
          fixture.whenStable().then( () => {
            fixture.detectChanges();

            const compare: AbstractControl = instance.feedbackForm.controls[ prop ];

            expect(instance.changeValue).toHaveBeenCalledWith(prop, ERRORS[ prop ]);
            const errors = compare.errors;
            console.log(`compare ${ prop }
              errors: ${ JSON.stringify(compare.errors) }
              valid: ${ compare.valid }
              value: ${ compare.value }
              status: ${ compare.status }
              pristine: ${ compare.pristine }
              untouched: ${ compare.untouched }`);
              // expect(errors).toBeObject();
            });
          }
        ));

        // Object.keys(ERRORS).forEach(
        //   function (prop) {
        it(`should have a feedback error property after setting the feedback`,
        async( () => {
          const prop = 'feedback';
          const control: AbstractControl = instance.feedbackForm.controls[ prop ];
          spyOn(instance, 'changeValue');
          console.log(`control ${ prop }
            errors: ${ JSON.stringify(control.errors) }
            valid: ${ control.valid }
            value: ${ control.value }
            status: ${ control.status }
            pristine: ${ control.pristine }
            untouched: ${ control.untouched }`);

            control.setValue(ERRORS[ prop ]);
            // instance.feedbackForm.setValue( { [prop]: ERRORS[ prop ] } );
            instance.changeValue( prop, ERRORS[ prop ] );

            fixture.detectChanges();
            fixture.whenStable().then( () => {
              fixture.detectChanges();

              const compare: AbstractControl = instance.feedbackForm.controls[ prop ];

              expect(instance.changeValue).toHaveBeenCalledWith(prop, ERRORS[ prop ]);
              const errors = compare.errors;
              console.log(`compare ${ prop }
                validators: ${ compare.validators }
                errors: ${ JSON.stringify(compare.errors) }
                valid: ${ compare.valid }
                value: ${ compare.value }
                status: ${ compare.status }
                pristine: ${ compare.pristine }
                untouched: ${ compare.untouched }`);
                // expect(errors).toBeObject();
              });
            }
          ));

          // it('should emit a name change event when setting the name', () => {
          //   spyOn(instance, 'changeValue');
          //   instance.changeValue('name', CHANGES.name);
          //   expect(instance.changeValue).toHaveBeenCalledWith('name', CHANGES.name);
          // });

        });

      });
