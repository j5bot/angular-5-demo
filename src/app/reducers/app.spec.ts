import { reducer, defaultState } from './app';
import * as fromApp from './app';
import * as AppActions from '../acions/app';

describe('AppReducer', () => {

  describe('undefined action', () => {

    it('should return the default state', () => {
      const action = {} as any;
      const result = reducer(defaultState, action);

      expect(result).toEqual(defaultState);
    });

    it('should match the previously defined default state', () => {
      const action = {} as any;
      const result = reducer(defaultState, action);

      expect(defaultState).toMatchSnapshot();
      expect(result).toMatchSnapshot();

      expect(result).toEqual(defaultState);
    });

  });

  describe('OpenEnterFeedbackModal / OPEN_ENTER_FEEDBACK_MODAL', () => {

    it('should change showEnterFeedback to true', () => {

      const event = {} as any;
      const createAction = new AppActions.OpenEnterFeedbackModal(event);

      const expectedResult = Object.assign({}, defaultState, {
        error: null,
        showEnterFeedback: true
      });

      const result = reducer(defaultState, createAction);

      // when we match both the expected and actual result against the
      // snapshot, we know that we have object equality, and nothing is broken
      expect(expectedResult).toMatchSnapshot();
      expect(result).toMatchSnapshot();

      expect(result).toEqual(expectedResult);
    });

  });

});
