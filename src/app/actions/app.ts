import { Action } from '@ngrx/store';

export enum AppActionTypes {
  OpenEnterFeedbackModal = '[ModalFlow] Open Enter Feedback Modal'
}

export class OpenEnterFeedbackModal implements Action {
  readonly type = AppActionTypes.OpenEnterFeedbackModal;

  constructor( public payload: any ) {}
}

export type AppActions =
  | OpenEnterFeedbackModal;
