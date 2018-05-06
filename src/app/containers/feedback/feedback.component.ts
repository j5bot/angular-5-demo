import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  MatIcon,
  MatButton,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material';

import { State } from '../../reducers';
import * as FeedbackActions from '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';
import * as selectors from '../../selectors/selectors';
import * as utilities from '../../../utilities/utilities';

const propertyTypes = fromFeedback.defaultPresentationState;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  constructor( private store: Store<State>) { }

  submit ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.SubmitFeedback($event)
    );
  }

  confirm ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.ConfirmFeedback($event)
    );
  }

  change ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.ChangeFeedback($event)
    );
  }

  cancel ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.CancelFeedback($event)
    );
  }

}

utilities.addPropertyGettersToPrototype({
  Component: FeedbackComponent,
  selectors: selectors.properties.feedback,
  properties: Object.keys( propertyTypes )
});
