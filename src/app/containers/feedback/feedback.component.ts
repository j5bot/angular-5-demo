import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import {
  MatIcon,
  MatButton,
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material';

import * as FeedbackActions from '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';
import * as selectors from '../../selectors/selectors';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  title$: Observable<string>;
  submitted$: Observable<boolean>;
  confirmed$: Observable<boolean>;
  feedback$: Observable<any>;
  submission$: Observable<any>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(
    public dialogRef: MatDialogRef<FeedbackComponent>,
    private store: Store<fromFeedback.State>
  ) {

    this.title$ = this.store.pipe(select(
      selectors.getFeedbackTitle
    ));

    this.submitted$ = this.store.pipe(select(
      selectors.getFeedbackSubmitted
    ));

    this.confirmed$ = this.store.pipe(select(
      selectors.getFeedbackConfirmed
    ));

    this.feedback$ = this.store.pipe(select(
      selectors.getFeedbackFeedback
    ));

    this.submission$ = this.store.pipe(select(
      selectors.getFeedbackSubmission
    ));

    this.error$ = this.store.pipe(select(
      selectors.getFeedbackError
    ));

    this.errorMessage$ = this.store.pipe(select(
      selectors.getFeedbackErrorMessage
    ));

  }

  changeForm ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.ChangeForm($event)
    );
  }

  submit ( $event: FeedbackActions.FeedbackActionTypes ) {
    return this.store.dispatch(
      new FeedbackActions.SubmitFeedback($event)
    );
  }

  confirm ( $event: FeedbackActions.FeedbackActionTypes ) {
    this.dialogRef.close();
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
