import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import * as FeedbackActions from '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';
import * as selectors from '../../selectors/selectors';
import * as utilities from '../../../utilities/utilities';

const propertyTypes = fromFeedback.defaultPresentationState;

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.css']
})
export class EnterFeedbackComponent {

  constructor ( private store: Store<State> ) {}

  submitFeedback ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.SubmitFeedback($event)
    );
  }

  confirmFeedback ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.ConfirmFeedback($event)
    );
  }

  changeFeedback ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.ChangeFeedback($event)
    );
  }

  cancelFeedback ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.CancelFeedback($event)
    );
  }

}

utilities.addPropertyGettersToPrototype({
  Component: EnterFeedbackComponent,
  selectors: selectors.properties.feedback,
  properties: Object.keys( propertyTypes )
});
