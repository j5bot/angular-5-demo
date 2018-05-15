import {
  NgModule
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { StoreModule, Store } from '@ngrx/store';

import {
  TestBed
} from '@angular/core/testing';

import {Overlay, OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {
  MatIcon,
  MatFormField,
  MatError,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material';

import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { marbles } from 'rxjs-marbles/jest';
import { testObservable } from '../../../../modules/test-utilities';

import * as FeedbackActions from  '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';
import { MaterialModule } from '../../../modules/material-module';

import { FeedbackComponent } from './feedback.component';
import { EnterFeedbackComponent } from '../../components/enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from '../../components/submit-feedback/submit-feedback.component';

const defaultState = fromFeedback.defaultPresentationState;

const TEST_DIRECTIVES = [
  MatError,
  FeedbackComponent,
  EnterFeedbackComponent,
  SubmitFeedbackComponent
];

@NgModule({
  imports: [
    OverlayModule,
    MatDialogModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    FeedbackComponent,
    EnterFeedbackComponent
  ],
  providers: [
    MaterialModule
  ]
})
class DialogTestModule { }

describe('FeedbackComponent', () => {
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<FeedbackComponent>;
  let store: Store<fromFeedback.State>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let overlay: Overlay;
  let instance: FeedbackComponent;
  let dispatch: any;

  beforeAll( () => {
    TestBed.configureTestingModule({
      imports: [
        DialogTestModule,
        StoreModule.forRoot( fromFeedback.reducer )
      ],
      providers: [
          { provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }}
        ]
      }).compileComponents();

    dialog = TestBed.get(MatDialog);
    store = TestBed.get(Store);
    overlay = TestBed.get(Overlay);
    overlayContainer = TestBed.get(OverlayContainer);

    dialogRef = dialog.open(FeedbackComponent, {
      width: '600px',
      height: '600px'
    });

    instance = dialogRef.componentInstance;

  });

  beforeEach( () => {
    dispatch = spyOn(store, 'dispatch');
  });

  it('should render dialog', () => {
    expect(dialog).toBeTruthy();
    // console.log(dialog);
  });

  it('should render dialogRef', () => {
    expect(dialogRef).toBeTruthy();
    // console.log(dialogRef);
  });

  it('should render (overlay)', () => {
    expect(overlay).toBeTruthy();
  });

  it('should render instance', () => {
    expect(instance).toBeTruthy();
    // console.log(instance);
  });

  it('should render (overlay container)', () => {
    expect(overlayContainer).toBeTruthy();
    // console.log(overlayContainer);
    // console.log(overlayContainer.getContainerElement());
  });

  it('should match snapshot (overlay container element)', () => {
    expect(overlayContainerElement).toMatchSnapshot();
  });

  // it('should match snapshot (feedback component instance)', () => {
  //   expect(instance).toMatchSnapshot();
  // });

  it('should have the default title', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.title,
      result: instance.title$
    });

  }));

  it('should have the default submitted flag', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.submitted,
      result: instance.submitted$
    });

  }));

  it('should have the default confirmed flag', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.confirmed,
      result: instance.confirmed$
    });

  }));

  it('should have the default feedback object', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.feedback,
      result: instance.feedback$
    });

  }));

  it('should have the default submission object', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.submission,
      result: instance.submission$
    });

  }));

  it('should dispatch a change form action', () => {

    const $event: any = { field: 'name', value: 'Not Another One' };
    const action = new FeedbackActions.ChangeForm( $event );

    instance.changeForm( $event );

    expect( dispatch ).toHaveBeenCalledWith( action );
  });

  it('should dispatch a submit action', () => {

    const $event: any = {};
    const action = new FeedbackActions.SubmitFeedback( $event );

    instance.submit( $event );

    expect( dispatch ).toHaveBeenCalledWith( action );
  });

  it('should dispatch a confirm action', () => {

    const $event: any = {};
    const action = new FeedbackActions.ConfirmFeedback( $event );

    instance.confirm( $event );

    expect( dispatch ).toHaveBeenCalledWith( action );
  });

  it('should dispatch a change feedback action', () => {

    const $event: any = {};
    const action = new FeedbackActions.ChangeFeedback( $event );

    instance.change( $event );

    expect( dispatch ).toHaveBeenCalledWith( action );
  });

  it('should dispatch a cancel feedback action', () => {

    const $event: any = {};
    const action = new FeedbackActions.CancelFeedback( $event );

    instance.cancel( $event );

    expect( dispatch ).toHaveBeenCalledWith( action );
  });

});


//   /**
//    * Container components are used as integration points for connecting
//    * the store to presentational components and dispatching
//    * actions to the store.
//    *
//    * Container methods that dispatch events are like a component's output
//    * observables.  Container properties that select state from store are like a
//    * component's input properties.  If pure components are functions of their
//    * inputs, containers are functions of state
//    *
//    * Traditionally you would query the components rendered template
//    * to validate its state. Since the components are analogous to
//    * pure functions, we take snapshots of these components for a given state
//    * to validate the rendered output and verify the component's output
//    * against changes in state.
//    */
//    it('should match previous snapshot', () => {
//      fixture.detectChanges();
//
//      expect(fixture).toMatchSnapshot();
//    });
//
//    xit('should dispatch an submit feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.SubmitFeedback($event);
//
//      instance.submit($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
//    xit('should dispatch a confirm feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.ConfirmFeedback($event);
//
//      instance.confirm($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
//    xit('should dispatch a change feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.ChangeFeedback($event);
//
//      instance.change($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
//    xit('should dipatch a cancel feedback event', () => {
//      const $event: any = {};
//      const action = new feedbackActions.CancelFeedback($event);
//
//      instance.cancel($event);
//
//      expect(dispatch).toHaveBeenCalledWith(action);
//    });
//
// });
