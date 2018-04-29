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
      imports: [
        ReactiveFormsModule
      ],
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

  xit('should have request message', () => {
    expect(instance.message).toBeNonEmptyString();
  });

  xit('should have an empty error message', () => {
    expect(instance.errorMessage).toBeEmptyString();
  });

  xit('should match previous snapshot in default state', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should disable the submit button if required fields are not entered',
    () => {
      instance.filled = false;

      fixture.detectChanges();

      expect(fixture).toMatchSnapshot();
    });

  xit('should enable the submit button if required fields are entered', () => {
    instance.filled = true;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should display an error message if one is set', () => {
    instance.errorMessage = 'Example error message';

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should emit an event if a valid form is submitted', () => {
    instance.form.setValue(feedbackInfo);

    fixture.detectChanges();

    spyOn(instance.submitted, 'emit');
    instance.submit();

    expect(instance.submitted.emit).toHaveBeenCalledWith(feedbackInfo);
  });

  xit('should emit an event if a complete form is submitted', () => {
    const completeInfo = Object.assign({}, contactInfo, feedbackInfo);
    instance.form.setValue(completeInfo);

    fixture.detectChanges();

    spyOn(instance.submitted, 'emit');
    instance.submit();
    expect(instance.submitted.emit).toHaveBeenCalledWith(completeInfo);
  });

  xit('should emit an event if feedback is cancelled', () => {
    fixture.detectChanges();

    spyOn(instance.cancelled, 'emit');
    instance.cancel();
    expect(instance.cancelled.emit).toHaveBeenCalledTimes(1);
  });

});
