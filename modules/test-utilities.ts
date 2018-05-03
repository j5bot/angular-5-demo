import { async } from '@angular/core/testing';
import { marbles } from 'rxjs-marbles/jest';
import { Observable } from 'rxjs/observable';

// helper for computing a state change result
export const expectedState: any = (state, props) => {
  return Object.assign({}, state, props);
};

// helper for testing running an action through a reducer to
// produce a state change
export const expectStateChange = (
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
export const expectDefaultState = expectStateChange;

export const createSimpleObservable = (value: any): Observable<any> => {
  return Observable.create(
    (observer) => observer.next(value)
  );
};

export const testObservable = async ({ fn, marble, hotOrCold = 'cold', expected, result }) => {
  if (fn) {
    await fn();
  }
  const exp = marble[hotOrCold]('a', { a: expected });
  marble.expect(result).toBeObservable(exp);
};
