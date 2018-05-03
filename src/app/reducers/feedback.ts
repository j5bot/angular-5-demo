import { FeedbackActionTypes, FeedbackActions } from '../actions/feedback';
import * as utilities from '../../utilities/utilities';

export interface State {
  submitted: boolean;
  confirmed: boolean;
  feedback: Object;
  submission: Object;
  error: boolean;
  errorMessage: string;
}

export const defaultPresentationState = {
  submitted: <boolean> false,
  confirmed: <boolean> false,
  feedback: <Object> null,
  submission: <Object> null,
};

export const defaultApplicationState = {
  error: <boolean> null,
  errorMessage: <string> ''
};

export const defaultState = Object.assign(
  {},
  defaultPresentationState,
  defaultApplicationState
);

export function reducer ( state = defaultState, action: any ) {
  return state;
}

export const accessors = utilities.createAccessors( defaultState );
