import { Action } from '@ngrx/store';

export enum FeedbackActionTypes {
  ChangeForm = '[ModalFlow] Change Feedback Form Value',
  FeedbackValidated = '[ModalFlow] Feedback Entered is Valid/Invalid',
  SubmitFeedback = '[ModalFlow] Submit Feedback Form',
  ConfirmFeedback = '[ModalFlow] Confirm Feedback Form',
  ChangeFeedback = '[ModalFlow] Change Feedback Form',
  CancelFeedback = '[ModalFlow] Cancel Feedback Form'
}

export class ChangeForm implements Action {
  readonly type = FeedbackActionTypes.ChangeForm;

  constructor( public payload: any ) {}
}

export class FeedbackValidated implements Action {
  readonly type = FeedbackActionTypes.FeedbackValidated;

  constructor( public payload: boolean ) {}
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
  | ChangeForm
  | FeedbackValidated
  | SubmitFeedback
  | ConfirmFeedback
  | ChangeFeedback
  | CancelFeedback;
