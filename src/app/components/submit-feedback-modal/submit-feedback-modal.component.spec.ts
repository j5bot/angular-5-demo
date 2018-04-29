import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SubmitFeedbackModalComponent } from './submit-feedback-modal.component';

describe('SubmitFeedbackModalComponent', () => {
  let fixture: ComponentFixture<SubmitFeedbackModalComponent>;
  let instance: SubmitFeedbackModalComponent;

  const completeContactInfo = {
    name: 'Ned Flanders',
    email: 'holyroller777@godmail.com',
    phone: '202-555-3423'
  };

  const feedbackInfo = {
    feedback: `I find it difficult to express the wonder that I felt when I discovered
this wonderful town that they call Springfield.

From its glowing nuclear power plant towers to its crumbling monorail going
nowhere, I can't think of another place that I'd rather call home.`
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SubmitFeedbackModalComponent
      ]
    });

    fixture = TestBed.createComponent(SubmitFeedbackModalComponent);
    instance = fixture.componentInstance;
  });

  xit('should create', () => {
    expect(instance).toBeTruthy();
  });

  xit('should have title text', () => {
    expect(instance.title).toBeNonEmptyString();
  });

  xit('should have confirmation message', () => {
    expect(instance.message).toBeNonEmptyString();
  });

  xit('should have feedback information', () => {
    instance.feedback = feedbackInfo;

    fixture.detectChanges();

    expect(instance.feedback).toBeObject();
    expect(instance.feedback).toHaveMember('feedback');
    expect(instance.feedback.feedback).toBeNonEmptyString();
  });

  xit('should render if feedback information is available', () => {
    instance.feedback = feedbackInfo;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should emit an event if confirmation is clicked', () => {
    instance.feedback = feedbackInfo;

    fixture.detectChanges();

    spyOn(instance.confirmed, 'emit');
    instance.confirm();

    expect(instance.confirmed.emit).toHaveBeenCalledWith(feedbackInfo);
  });

  xit('should render if complete feedback is available', () => {
    const completeInfo = Object.assign({}, contactInfo, feedbackInfo);
    instance.feedback = completeInfo;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should emit an event if a complete form is confirmed', () => {
    const completeInfo = Object.assign({}, contactInfo, feedbackInfo);
    instance.feedback = completeInfo;

    fixture.detectChanges();

    spyOn(instance.confirmed, 'emit');
    instance.confirm();
    expect(instance.confirmed.emit).toHaveBeenCalledWith(completeInfo);
  });

  xit('should emit an event if the user wants to make changes', () => {
    fixture.detectChanges();

    spyOn(instance.toChange, 'emit');
    instance.change();
    expect(instance.toChange.emit).toHaveBeenCalledTimes(1);
  });

  xit('should emit an event if feedback is cancelled', () => {
    fixture.detectChanges();

    spyOn(instance.cancelled, 'emit');
    instance.cancel();
    expect(instance.cancelled.emit).toHaveBeenCalledTimes(1);
  });

});
