import { FeedbackActionTypes, FeedbackActions } from '../actions/feedback';
import { Feedback } from '../models/feedback';
import * as utilities from '../../utilities/utilities';

export interface State {
  submitted: boolean;
  confirmed: boolean;
  feedback: Feedback;
  submission: Feedback;
  error: boolean;
  errorMessage: string;
}

export const defaultPresentationState = {
  submitted: <boolean> false,
  confirmed: <boolean> false,
  feedback: <Feedback> null,
  submission: <Feedback> null,
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

  const payload = action.payload;

  let target: string;
  let flag: string;
  let decorate: Object;

  switch (action.type) {
    case FeedbackActionTypes.SubmitFeedback:
      target = 'feedback';
      flag = 'submitted';
      decorate = {
        submission: null,
        confirmed: false
      };
    case FeedbackActionTypes.ConfirmFeedback:
      target = target || 'submission';
      flag = flag || 'confirmed';
      decorate = decorate || {
        feedback: null,
        submitted: false
      };

      // empty submission
      if ( !payload || Object.keys(payload).length === 0 ) {
        return {
          ...state,
          error: true,
          errorMessage: 'You must enter feedback to continue.',
          submitted: false
        };
      }

      // required field
      if ( !payload.feedback ) {
        return {
          ...state,
          error: true,
          errorMessage: 'You must include feedback with your submission.',
          submitted: false
        };
      }

      return {
        ...state,
        [target]: payload,
        [flag]: true,
        ...decorate
      };

  }
  return state;
}

export const accessors = utilities.createAccessors( defaultState );
