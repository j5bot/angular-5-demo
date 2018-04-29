import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import { SubmitFeedbackComponent } from './submit-feedback.component';
import { SubmitFeedbackModalComponent } from '../../components/submit-feedback-modal/submit-feedback-modal.component';

import * as SubmitFeedbackActions from '../../actions';
import * as fromSubmitFeedback from '../../reducers';

describe('SubmitFeedbackComponent', () => {
  let fixture: ComponentFixture<SubmitFeedbackComponent>;
  let store: Store<fromSubmitFeedback.State>;
  let instance: SubmitFeedbackComponent;
  let dispatch: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          feedback: combineReducers(fromSubmitFeedback.reducers)
        })
      ],
      declarations: [
        SubmitFeedbackComponent,
        SubmitFeedbackModalComponent
      ]
    });

    fixture = TestBed.createComponent(SubmitFeedbackComponent);
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
   xit('should match previous snapshot', () => {
     fixture.detectChanges();

     expect(fixture).toMatchSnapshot();
   });

   xit('should dispatch a confirm feedback event', () => {
     const $event: any = {};
     const action = new SubmitFeedbackActions.ConfirmFeedback($event);

     instance.confirm($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

   xit('should dispatch a change feedback event', () => {
     const $event: any = {};
     const action = new SubmitFeedbackActions.ChangeFeedback($event);

     instance.change($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

   xit('should dipatch a cancel feedback event', () => {
     const $event: any = {};
     const action = new SubmitFeedbackActions.CancelFeedback($event);

     instance.cancel($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
