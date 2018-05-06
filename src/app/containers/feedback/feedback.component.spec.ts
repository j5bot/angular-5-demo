import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import {
  MatIcon,
  MatDialogContent, MatDialogTitle, MatDialogActions,
  MatButton, MatFormField, MatRipple } from '@angular/material';
import {
  MatInput
} from '@angular/material/input';

import { FeedbackComponent } from './feedback.component';
import { EnterFeedbackComponent } from '../../components/enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from '../submit-feedback/submit-feedback.component';

import * as feedbackActions from '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';

describe('FeedbackComponent', () => {
  let fixture: ComponentFixture<FeedbackComponent>;
  let store: Store<fromFeedback.State>;
  let instance: FeedbackComponent;
  let dispatch: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          feedback: combineReducers(fromFeedback.reducer)
        })
      ],
      declarations: [
        FeedbackComponent,
        EnterFeedbackComponent,
        SubmitFeedbackComponent,
        MatIcon,
        MatDialogContent,
        MatDialogTitle,
        MatDialogActions,
        MatButton,
        MatInput,
        MatFormField,
        MatRipple
      ]
    });

    fixture = TestBed.createComponent(FeedbackComponent);
    store = TestBed.get(Store);
    instance = fixture.componentInstance;

    dispatch = spyOn(store, 'dispatch');
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
     fixture.detectChanges();

     expect(fixture).toMatchSnapshot();
   });

   it('should dispatch an submit feedback event', () => {
     const $event: any = {};
     const action = new feedbackActions.SubmitFeedback($event);

     instance.submit($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

   it('should dispatch a confirm feedback event', () => {
     const $event: any = {};
     const action = new feedbackActions.ConfirmFeedback($event);

     instance.confirm($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

   it('should dispatch a change feedback event', () => {
     const $event: any = {};
     const action = new feedbackActions.ChangeFeedback($event);

     instance.change($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

   it('should dipatch a cancel feedback event', () => {
     const $event: any = {};
     const action = new feedbackActions.CancelFeedback($event);

     instance.cancel($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
