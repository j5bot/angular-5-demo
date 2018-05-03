import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as app from './app';
import * as feedback from './feedback';

export interface State {
  app: app.State;
  feedback: feedback.State;
}

export const reducers: ActionReducerMap<State> = {
  app: app.reducer,
  feedback: feedback.reducer
};
