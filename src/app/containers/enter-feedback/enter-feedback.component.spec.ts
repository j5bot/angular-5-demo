import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import { EnterFeedbackComponent } from './enter-feedback.component';
import { EnterFeedbackModalComponent } from '../../components/enter-feedback-modal/enter-feedback-modal.component';

import * as FeedbackActions from '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';

describe('EnterFeedbackComponent', () => {
  let fixture: ComponentFixture<EnterFeedbackComponent>;
  let store: Store<fromFeedback.State>;
  let instance: EnterFeedbackComponent;
  let dispatch: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          feedback: combineReducers(fromFeedback.reducer)
        })
      ],
      declarations: [
        EnterFeedbackComponent,
        EnterFeedbackModalComponent
      ]
    });

    fixture = TestBed.createComponent(EnterFeedbackComponent);
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

   xit('should dispatch an submit feedback event', () => {
     const $event: any = {};
     const action = new FeedbackActions.SubmitFeedback($event);

     instance.submit($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

   xit('should dipatch a cancel feedback event', () => {
     const $event: any = {};
     const action = new FeedbackActions.CancelFeedback($event);

     instance.cancel($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
