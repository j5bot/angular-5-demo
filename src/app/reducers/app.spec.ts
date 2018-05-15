import { reducer, defaultState } from './app';
import {
  expectDefaultState,
  expectStateChange
} from '../../../modules/test-utilities';
import * as fromApp from './app';
import * as AppActions from '../actions/app';

describe('AppReducer', () => {

  const state = defaultState;

  describe('undefined action', () => {

    it('should return the default state and match the previously defined default state', () => {
      expectDefaultState({ state, reducer });
    });

  });

  describe('OpenEnterFeedbackModal / OPEN_ENTER_FEEDBACK_MODAL', () => {

    const Action = AppActions.OpenEnterFeedbackModal;

    it('should change showEnterFeedback to true', () => {
      const input = {} as any;

      expectStateChange({
        input,
        DispatchedAction: Action,
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
