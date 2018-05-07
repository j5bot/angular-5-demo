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
  title: <string> `Now's Your Chance!  Think BIG!`
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
  let source;
  let target: string;
  let flag: string;
  let decorate: Object;

  switch (action.type) {
    case FeedbackActionTypes.ChangeForm:
      console.log(`received change: ${ JSON.stringify(payload) }`);
      console.log(`state: ${ JSON.stringify(state, null, 2) }`);
      return {
        ...state,
        feedback: { ...state.feedback, [payload.field]: payload.value }
      };

    case FeedbackActionTypes.SubmitFeedback:
      // debugger;
      target = 'feedback';
      flag = 'submitted';
      decorate = {
        submission: null,
        confirmed: false
      };
    case FeedbackActionTypes.ConfirmFeedback:
      source = state.feedback;
      target = target || 'submission';
      flag = flag || 'confirmed';
      decorate = decorate || {
        feedback: null,
        submitted: false
      };

      // empty submission
      if ( !state.feedback || Object.keys(state.feedback).length === 0 ) {
        // console.log( JSON.stringify(state.feedback) );
        return {
          ...state,
          error: true,
          errorMessage: 'You must enter feedback to continue.',
          submitted: false
        };
      }

      // required field
      if ( !state.feedback.feedback ) {
        return {
          ...state,
          error: true,
          errorMessage: 'You must include feedback with your submission.',
          submitted: false
        };
      }

      console.log('new state: ' + JSON.stringify({
        ...state,
        [target]: source,
        [flag]: true,
        ...decorate
      }));

      return {
        ...state,
        [target]: source,
        [flag]: true,
        ...decorate
      };

  }
  return state;
}

export const accessors = utilities.createAccessors( defaultState );
