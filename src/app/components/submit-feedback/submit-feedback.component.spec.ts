import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitFeedbackComponent } from './submit-feedback.component';
import { Feedback } from '../../models/feedback';

describe('SubmitFeedbackComponent', () => {
  let fixture: ComponentFixture<SubmitFeedbackComponent>;
  let instance: SubmitFeedbackComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SubmitFeedbackComponent
      ]
    });

    fixture = TestBed.createComponent(SubmitFeedbackComponent);
    instance = fixture.componentInstance;

    instance.submitted = true;
    instance.confirmed = false;
    instance.feedback = {
      feedback: `This is my feedback.`
    } as Feedback;

    fixture.detectChanges();
  });

  /**
   * Container components are used as integration points for connecting
   * the store to presentational components and dispatching
   * actions to the store.
   *
   * Container methods that dispatch events are like a component's output
   * observables.  Container properties that select state from store are like a
   * component's input properties.  If pure components are functions of their
   * inputs, containers are functions of state
   *
   * Traditionally you would query the components rendered template
   * to validate its state. Since the components are analogous to
   * pure functions, we take snapshots of these components for a given state
   * to validate the rendered output and verify the component's output
   * against changes in state.
   */
   it('should not be undefined', () => {
     expect(instance).toBeTruthy();
   });

   it('should match previous snapshot', () => {
     expect(fixture).toMatchSnapshot();
   });

   it('should have a submitted flag (set to true)', () => {
     expect(instance.submitted).toBeTrue();
   });

   it('should have a confirmed flag (set to false)', () => {
     expect(instance.confirmed).toBeFalse();
   });

   it('should have required feedback properties', () => {
     expect(instance.feedback.feedback).toBeNonEmptyString();
   });

   it('should accept non-required feedback properties (name)', () => {
     instance.feedback.name = 'Testing Tester';
     fixture.detectChanges();
     expect(instance.feedback.name).toBeNonEmptyString();
   });

   it('should accept non-required feedback properties (phone)', () => {
     instance.feedback.phone = '555-555-1212';
     fixture.detectChanges();
     expect(instance.feedback.phone).toBeNonEmptyString();
   });

   it('should accept non-required feedback properties (email)', () => {
     instance.feedback.email = 'tester@testing.com';
     fixture.detectChanges();
     expect(instance.feedback.email).toBeNonEmptyString();
   });
});
