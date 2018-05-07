import { Component, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

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
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent {

  isSubmitted$: Observable<boolean>;
  isConfirmed$: Observable<boolean>;
  feedback$: Observable<any>;

  constructor( private store: Store<State>) {
    this.isSubmitted$ = this.store.pipe(select(selectors.properties.feedback.submitted));
    this.isConfirmed$ = this.store.pipe(select(selectors.properties.feedback.confirmed));
    this.feedback$ = this.store.pipe(select(selectors.properties.feedback.feedback));
  }

  ngOnChanges() {
    debugger;
  }

  changeForm ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      // console.log( `dispatching: ${ JSON.stringify( $event ) }`);
      new FeedbackActions.ChangeForm($event)
    );
  }

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
