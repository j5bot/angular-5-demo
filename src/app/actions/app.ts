import { Action } from '@ngrx/store';

export enum AppActionTypes {
  OpenEnterFeedbackModal = '[ModalFlow] Open Enter Feedback Modal',
  CloseEnterFeedbackModal = '[ModalFlow] Close Enter Feedback Modal'
}

export class OpenEnterFeedbackModal implements Action {
  readonly type = AppActionTypes.OpenEnterFeedbackModal;

  constructor( public payload: any ) {}
}

export class CloseEnterFeedbackModal implements Action {
  readonly type = AppActionTypes.CloseEnterFeedbackModal;

  constructor( public payload: string ) {}
}

export type AppActions =
  | OpenEnterFeedbackModal
  | CloseEnterFeedbackModal;
