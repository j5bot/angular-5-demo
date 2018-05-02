import { AppActionTypes, AppActions } from '../actions/app';
import * as utilities from '../../utilities/utilities';

export interface State {
  title: String;
  message: String;
  showButtonText: String;
  showFeedback: boolean;
  feedback: Object;
  submission: Object;
  error: boolean;
  errorMessage: String;
}

export const defaultPresentationState = {
  title: <String> 'What Do You Think About Us?',
  message: <String> `We're interested in learning your thoughts about our many products and services`,
  showButtonText: <String> 'Feedback',
  showFeedback: <boolean> false,
};

export const defaultApplicationState = {
  feedback: <Object> null,
  submission: <Object> null,
  error: <boolean> null,
  errorMessage: <String> ''
};

export const defaultState: State = Object.assign(
  {},
  defaultApplicationState,
  defaultPresentationState
);

export function reducer ( state = defaultState, action: AppActions ): State {

  switch (action.type) {
    case AppActionTypes.OpenEnterFeedbackModal:
      return {
        ...state,
        error: null,
        showFeedback: true
      };

  }

  return defaultState;

}

export const accessors = utilities.createAccessors( defaultState );
