import { reducer, defaultState } from './app';
import * as fromApp from './app';
import * as AppActions from '../actions/app';

describe('AppReducer', () => {

  const state = defaultState;

  describe('undefined action', () => {

    xit('should return the default state and match the previously defined default state', () => {
      expectDefaultState({ state, reducer });
    });

  });

  describe('OpenEnterFeedbackModal / OPEN_ENTER_FEEDBACK_MODAL', () => {

    const Action = AppActions.OpenEnterFeedbackModal;

    xit('should change showEnterFeedback to true', () => {
      const input = {} as any;

      expectedStateChange({
        input,
        Action,
        reducer,
        state,
        change: {
          error: null,
          showFeedback: true
        }
      });

    });

  });

});
