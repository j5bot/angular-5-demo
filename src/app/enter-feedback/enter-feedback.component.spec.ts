import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { timer } from 'rxjs/observable/timer';

import { EnterFeedbackComponent } from './enter-feedback.component';

const FEEDBACK_MESSAGE = 'Please tell us what you think:';

describe('EnterFeedbackComponent', () => {
  let component: EnterFeedbackComponent;
  let feedbackForm: any;
  let fixture: ComponentFixture<EnterFeedbackComponent>;
  let debugElement: DebugElement;
  let compiled: any;

  const submitAsync = () => {
    timer(500).subscribe(() => {
      component.feedbackForm.submit();
    })
  };

  const setContactInfo = () => {
    feedbackForm.controls['name'].setValue('Ned Flanders');
    feedbackForm.controls['email'].setValue('holyroller777@godmail.com');
    feedbackForm.controls['phone'].setValue('202-555-3423');
  }

  const setComments = () => {
    feedbackForm.controls['comment'].setValue(
`I find it difficult to express the wonder that I felt when I discovered
this wonderful town that they call Springfield.

From its glowing nuclear power plant towers to its crumbling monorail going
nowhere, I can't think of another place that I'd rather call home.`
    );
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnterFeedbackComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(EnterFeedbackComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      compiled = debugElement.nativeElement;

      feedbackForm = component.feedbackForm;
      setContactInfo();

      fixture.detectChanges();
    });
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have a feedback message', async(() => {
    expect(component.message).toEqual(FEEDBACK_MESSAGE);
  }));

  it('should render the feedback message in an h1', async(() => {
    expect(compiled.querySelector('h1').textContent).toEqual(component.message);
  }));

  it('should not be marked as valid if no comment has been entered', async(() => {
    feedbackForm.controls['comment'].setValue('');
    expect(feedbackForm.valid).toBeFalsy();
  }));

  it('should be marked as valid if a comment has been entered', async(() => {
    setComments();
    expect(feedbackForm.valid).toBeTruthy();
  }));

  it('should have text defined for the submit button', async(() => {
    expect(component.submitText).toBeTruthy();
  }));

  it('should have a submit button', async(() => {
    expect(compiled.querySelector('button').textContent).toEqual(component.submitText);
  }));

  it('should be able to be submitted if the form is valid', fakeAsync(() => {
    setComments();
    expect(feedbackForm.valid).toBe(true);
    expect(feedbackForm.submitted).toBe(false);
    spyOn(feedbackForm, 'onSubmit');
    submitAsync();
    tick(500);
    expect(feedbackForm.submitted).toBe(true);
    expect(feedbackForm.submit).toHaveBeenCalledTimes(1);
  }));



});
