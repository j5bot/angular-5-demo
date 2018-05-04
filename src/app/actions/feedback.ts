import { Action } from '@ngrx/store';

export enum FeedbackActionTypes {
  SubmitFeedback = '[ModalFlow] Submit Feedback Form',
  ConfirmFeedback = '[ModalFlow] Confirm Feedback Form',
  ChangeFeedback = '[ModalFlow] Change Feedback Form',
  CancelFeedback = '[ModalFlow] Cancel Feedback Form'
}

export class SubmitFeedback implements Action {
  readonly type = FeedbackActionTypes.SubmitFeedback;

  constructor( public payload: any ) {}
}

export class ConfirmFeedback implements Action {
  readonly type = FeedbackActionTypes.ConfirmFeedback;

  constructor( public payload: any ) {}
}

export class ChangeFeedback implements Action {
  readonly type = FeedbackActionTypes.ChangeFeedback;

  constructor( public payload: any ) {}
}

export class CancelFeedback implements Action {
  readonly type = FeedbackActionTypes.CancelFeedback;

  constructor( public payload: any ) {}
}

export type FeedbackActions =
  | SubmitFeedback
  | ConfirmFeedback
  | ChangeFeedback
  | CancelFeedback;
