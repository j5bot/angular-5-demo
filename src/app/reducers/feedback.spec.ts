import * as testUtilities from '../../../modules/test-utilities';
import { reducer, defaultState } from './feedback';
import * as fromFeedback from './feedback';
import * as FeedbackActions from '../actions/feedback';
import { Feedback } from '../models/feedback';

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
      testUtilities.expectDefaultState({ state, reducer });
    });

  });

  describe('CancelFeedback', () => {

    const DispatchedAction = FeedbackActions.CancelFeedback;

    it('should clear the form and hide the modal', () => {

      testUtilities.expectStateChange({
        DispatchedAction,
        state,
        reducer,
        change: {
          error: null,
          submitted: false,
          feedback: null
        }
      });

    });

  });

  describe('EnterFeedbackComponent', () => {

    describe('SubmitFeedback / SUBMIT_FEEDBACK', () => {

      const DispatchedAction = FeedbackActions.SubmitFeedback;

      it('should reject an empty object', () => {

        testUtilities.expectStateChange({
          input: noFeedback,
          DispatchedAction,
          reducer,
          state,
          change: {
            error: true,
            errorMessage: 'You must enter feedback to continue.'
            submitted: false
          }
        });

      });

      it('should reject a submission without feedback', () => {

        const input = completeContactInfo;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
          state,
          reducer,
          change: {
            error: true,
            errorMessage: 'You must include feedback with your submission.'
            submitted: false
          }
        });

      });

      it('should store the minimum form values in the store as in progress', () => {
        const input = feedbackInfo;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
          reducer,
          state,
          change: {
            error: null,
            feedback: input,
            submitted: true
          }
        });

      });

      it('should store a complete form in the store as in progress', () => {
        const input = fullFeedback;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
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

      const DispatchedAction = FeedbackActions.ConfirmFeedback;

      it('should throw an error when the feedback object is incomplete', () => {

        const input = noFeedback;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
          state,
          reducer,
          change: {
            error: true,
            errorMessage: 'You must enter feedback to continue.',
            submitted: false
          }
        });

      });

      it('should throw an error when there is no feedback', () => {

        const input = completeContactInfo;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
          state,
          reducer,
          change: {
            error: true,
            errorMessage: 'You must include feedback with your submission.',
            submitted: false
          }
        });

      });

      it('should confirm the minimum required feedback', () => {

        const input = feedbackInfo;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
          reducer,
          state,
          change: {
            error: null,
            submission: input,
            feedback: null,
            confirmed: true,
            submitted: false
          }
        });

      });

      it('should confirm a complete feedback object', () => {
        const input = fullFeedback;

        testUtilities.expectStateChange({
          input,
          DispatchedAction,
          reducer,
          state,
          change: {
            error: null,
            submission: input,
            feedback: null,
            confirmed: true,
            submitted: false
          }
        });

      });

    });

    describe('ChangeFeedback / CHANGE_FEEDBACK', () => {

      const DispatchedAction = FeedbackActions.ChangeFeedback;

      it('should return user to the feedback form', () => {

        testUtilities.expectStateChange({
          DispatchedAction,
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
