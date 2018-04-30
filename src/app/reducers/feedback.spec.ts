import { reducer, defaultState } from './feedback';
import * as fromFeedback from './feedback';
import * as EnterFeedbackActions from '../actions/enter-feedback';
import * as SubmitFeedbackActions from '../actions/submit-feedback';
import { Feedback } from '../models/app';

describe('FeedbackReducer', () => {

  const state = defaultState;

  const noFeedback = {} as Feedback;

  const completeContactInfo = {
    name: 'Ned Flanders',
    email: 'holyroller777@godmail.com',
    phone: '202-555-3423'
  } as Feedback;

  const feedbackInfo = {
    feedback: `I find it difficult to express the wonder that I felt when I discovered
this wonderful town that they call Springfield.

From its glowing nuclear power plant towers to its crumbling monorail going
nowhere, I can't think of another place that I'd rather call home.`
  } as Feedback;

  const fullFeedback =
    Object.assign({}, completeContactInfo, feedbackInfo) as Feedback;

  describe('undefined action', () => {

    xit('should return the default state and match the previously defined default state', () => {
      expectedDefaultState({ state, reducer });
    });

  });

  describe('CancelFeedback', () => {

    const Action = EnterFeedbackAction.CancelFeedback;

    xit('should clear the form and hide the modal', () => {

      expectStateChange({
        Action,
        state,
        reducer,
        change: {
          error: null,
          submitted: false,
          progress: null,
          feedback: null
        }
      });

    });

  });

  describe('EnterFeedbackComponent', () => {

    describe('SubmitFeedback / SUBMIT_FEEDBACK', () => {

      const Action = EnterFeedbackActions.Submit;

      xit('should reject an empty object', () => {

        expectStateChange({
          input: noFeedback,
          Action,
          reducer,
          state,
          change: {
            error: true,
            errorMessage: 'You must enter feedback to continue.'
          }
        });

      });

      xit('should reject a submission without feedback', () => {

        const input = completeContactInfo;

        expectStateChange({
          input,
          Action,
          state,
          reducer,
          change: {
            error: true,
            errorMessage: 'You must include feedback.'
          }
        });

      });

      xit('should store the minimum form values in the store as in progress', () => {
        const input = feedbackInfo;

        expectStateChange({
          input,
          Action,
          reducer,
          state,
          change: {
            error: null,
            feedback: input,
            submitted: true
          }
        });

      });

      xit('should store a complete form in the store as in progress', () => {
        const input = fullFeedback;

        expectStateChange({
          input,
          Action,
          reducer,
          state,
          change: {
            error: null,
            feedback: input,
            submitted: true
          }
        });

      });

    });

  });

  describe('SubmitFeedbackComponent', () => {

    describe('ConfirmFeedback / CONFIRM_FEEDBACK', () => {

      const Action = SubmitFeedbackActions.Confirm;

      xit('should throw an error when the feedback object is incomplete', () => {

        const input = noFeedback;

        expectStateChange({
          input,
          Action,
          state,
          reducer,
          change: {
            error: true,
            errorMessage: 'An error occurred trying to confirm your feedback.'
          }
        });

      });

      xit('should throw an error when there is no feedback', () => {

        const input = completeContactInfo;

        expectStateChange({
          input,
          Action,
          state,
          reducer,
          change: {
            error: true,
            errorMessage: 'You must include feedback.'
          }
        });

      });

      xit('should confirm the minimum required feedback', () => {

        const input = feedbackInfo;

        expectStateChange({
          input,
          Action,
          reducer,
          state,
          change: {
            error: null,
            submission: input,
            feedback: null,
            progress: null,
            confirmed: true,
            submitted: false,
            showFeedback: false;
          }
        });

      });

      xit('should confirm a complete feedback object', () => {
        const input = fullFeedback;

        expectStateChange({
          input,
          Action,
          reducer,
          state,
          change: {
            error: null,
            submission: input,
            feedback: null,
            progress: null,
            confirmed: true,
            submitted: false,
            showFeedback: false
          }
        });

      });

    });

    describe('ChangeFeedback / CHANGE_FEEDBACK', () => {

      const Action = SubmitFeedbackActions.Change;

      xit('should return user to the feedback form', () => {

        expectStateChange({
          Action,
          reducer,
          state,
          change: {
            error: null,
            feedback: null,
            submitted: false
          }
        });

      });

    });

  });

});
