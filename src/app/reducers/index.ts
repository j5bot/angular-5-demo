import {
  ActionReducerMap
} from '@ngrx/store';

import {
  State as appState,
  reducer as appReducer } from './app';
import {
  State as feedbackState,
  reducer as feedbackReducer } from './feedback';

export interface State {
  app: appState;
  feedback: feedbackState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  feedback: feedbackReducer
};
