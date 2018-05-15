import {
  NgModule
} from '@angular/core';

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

import * as fromFeedback from '../../reducers/feedback';
import { MaterialModule } from '../../../modules/material-module';

import { FeedbackComponent } from './feedback.component';
import { EnterFeedbackComponent } from '../../components/enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from '../../components/submit-feedback/submit-feedback.component';

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

  });

  beforeEach( () => {
    dispatch = spyOn(store, 'dispatch');
  });


  it('should open', () => {

    dialogRef = dialog.open(FeedbackComponent, {
      width: '600px',
      height: '600px'
    });

  });

  it('should render', () => {
    expect(dialogRef).toBeTruthy();
  });

  it('should render (overlay)', () => {
    expect(overlay).toBeTruthy();
  });

  it('should render (overlay container)', () => {
    expect(overlayContainer).toBeTruthy();
  });

  it('should match snapshot (overlay container element)', () => {
    expect(overlayContainerElement).toMatchSnapshot();
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
