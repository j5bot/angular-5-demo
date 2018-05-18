import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';

import * as app from '../reducers/app';
import * as feedback from '../reducers/feedback';

export const featureSelectors = {
  app: createFeatureSelector<app.State>('app'),
  feedback: createFeatureSelector<feedback.State>('feedback')
};

export const getAppTitle = createSelector(
  featureSelectors.app,
  (state: app.State) => state.title
);

export const getAppMessage = createSelector(
  featureSelectors.app,
  (state: app.State) => state.message
);

export const getAppShowButtonText = createSelector(
  featureSelectors.app,
  (state: app.State) => state.showButtonText
);

export const getAppShowFeedback = createSelector(
  featureSelectors.app,
  (state: app.State) => state.showFeedback
);

export const getAppError = createSelector(
  featureSelectors.app,
  (state: app.State) => state.error
);

export const getAppErrorMessage = createSelector(
  featureSelectors.app,
  (state: app.State) => state.errorMessage
);

export const getFeedbackTitle = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.title
);

export const getFeedbackValidated = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.validated
);

export const getFeedbackSubmitted = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.submitted
);

export const getFeedbackConfirmed = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.confirmed
);
export const getFeedbackFeedback = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.feedback
);
export const getFeedbackSubmission = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.submission
);
export const getFeedbackError = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.error
);
export const getFeedbackErrorMessage = createSelector(
  featureSelectors.feedback,
  (state: feedback.State) => state.errorMessage
);
