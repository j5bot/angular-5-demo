import { AppActionTypes, AppActions } from '../actions/app';
import * as utilities from '../../utilities/utilities';

export interface State {
  title: String;
  message: String;
  showButtonText: String;
  showFeedback: boolean;
  feedback: any;
  error: any;
  errorMessage: String;
}

export const defaultState: State = {
  title: 'What Do You Think About Us?',
  message: `We're interested in learning your thoughts about our many products and services`,
  showButtonText: 'Feedback',
  showFeedback: false,
  feedback: null,
  error: null,
  errorMessage: ''
};

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
