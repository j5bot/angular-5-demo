import { AppActionTypes, AppActions } from '../actions/app';

export interface State {
  title: string;
  message: string;
  showButtonText: string;
  showFeedback: boolean;
  error: boolean;
  errorMessage: string;
}

export const defaultPresentationState = {
  title: <string> 'What Do You Think About Us?',
  message: <string> `We're interested in learning your thoughts about our many products and services`,
  showButtonText: <string> 'Feedback',
  showFeedback: <boolean> false,
};

export const defaultApplicationState = {
  error: <boolean> null,
  errorMessage: <string> ''
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
