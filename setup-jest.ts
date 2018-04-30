/*
https://www.xfive.co/blog/testing-angular-faster-jest/
https://github.com/thymikee/jest-preset-angular
*/
import 'expect-more-jest';

import 'jest-preset-angular';

import './jest-global-mocks';

// helper for computing a state change result
const expectedState: any = (state, props) => {
  return Object.assign({}, state, props);
};

// helper for testing running an action through a reducer to
// produce a state change
const expectStateChange = (
  { input, Action, reducer, state, change }
) => {

  const createAction = Action ?
    new Action(input ? input : {} as any) :
      {} as any;

  const result = reducer(state, createAction);

  const expectedResult = expectedState(state, change || {});

  expect(change ? expectedResult : state).toMatchSnapshot();
  expect(result).toMatchSnapshot();

  expect(result).toEqual(expectedResult);
};
// alias for expectStateChange since we can use it to
// test default state as well
const expectDefaultState = expectStateChange;
