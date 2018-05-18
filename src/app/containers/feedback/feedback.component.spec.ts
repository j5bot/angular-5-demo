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

import * as AppActions from '../../actions/app';
import * as FeedbackActions from '../../actions/feedback';
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
  });

  it('should render dialogRef', () => {
    expect(dialogRef).toBeTruthy();
  });

  it('should render (overlay)', () => {
    expect(overlay).toBeTruthy();
  });

  it('should render instance', () => {
    expect(instance).toBeTruthy();
  });

  it('should render (overlay container)', () => {
    expect(overlayContainer).toBeTruthy();
  });

  it('should match snapshot (overlay container element)', () => {
    expect(overlayContainerElement).toMatchSnapshot();
  });

  it('should have the default title', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.title,
      result: instance.title$
    });

  }));

  it('should have the default validated flag', marbles((m) => {

    testObservable({
      fn: () => {},
      marble: m,
      expected: defaultState.validated,
      result: instance.validated$
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

  it('should dispatch a validate form action', () => {

    const valid = true;
    const action = new FeedbackActions.FeedbackValidated( valid );

    instance.validate( valid );

    expect( dispatch ).toHaveBeenCalledWith( action );

  });

  it('should dispatch an invalidate form action', () => {

    const valid = false;
    const action = new FeedbackActions.FeedbackValidated( valid );

    instance.validate( valid );

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

  it('should dispatch a close feedback modal action', () => {
    const result = 'closing feedbackform: foo';
    const action = new AppActions.CloseEnterFeedbackModal( result );

    instance.close( result );

    expect( dispatch ).toHaveBeenCalledWith( action );

  });

});
