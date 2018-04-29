import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

import { SubmitFeedbackComponent } from './submit-feedback.component';

const SUBMIT_FEEDBACK_MESSAGE =
`Thank you for your feedback!
You can either continue and submit your feedback or go back and edit your
feedback before you send it.`;

describe('SubmitFeedbackComponent', () => {
  let component: SubmitFeedbackComponent;
  let fixture: ComponentFixture<SubmitFeedbackComponent>;
  let debugElement: DebugElement;
  let compiled: any;

  const submitAsync = () => {
    timer(500).subscribe(() => {
      component.submit();
    });
  };

  const editAsync = () => {
    timer(500).subscribe(() => {
      component.edit();
    });
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFeedbackComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SubmitFeedbackComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      compiled = debugElement.nativeElement;

      fixture.detectChanges();
    });
  }));

  it('should create the submission confirmation', () => {
    expect(component).toBeTruthy();
  });

  it('should have a confirmation message', async(() => {
    expect(component.message).toEqual(SUBMIT_FEEDBACK_MESSAGE);
  }));

  it ('should render the confirmation message in an h1', async(() => {
    expect(compiled.querySelector('h1').textContent).toEqual(component.message);
  }));

  it('should have text defined for the confirmation button', async(() => {
    expect(component.confirmText).toBeTruthy();
  }));

  it('should have text defined for the edit submission button', async(() => {
    expect(component.editText).toBeTruthy();
  }));

  it('should have text defined for the cancel button', async(() => {
    expect(component.cancelText).toBeTruthy();
  }));

  it('should have a submit button', async(() => {
    expect(compiled.querySelector('button.submit').textContent).toEqual(component.submitText);
  }));

  it('should have an edit button', async(() => {
    expect(compiled.querySelector('button.edit').textContent).toEqual(component.editText);
  }));

  it('should have a cancel button', async(() => {
    expect(compiled.querySelector('button.cancel').textContent).toEqual(component.cancelText);
  })

  it('should allow you to submit the feedback', async(() => {
    spyOn(component, 'onSubmit');
    submitAsync();
    tick(500);
    expect(component.submitted).toBe(true);
    expect(component.submit).toHaveBeenCalledTimes(1);
  }));

  it('should allow you to edit the feedback', async(() => {
    spyOn(component, 'onEdit');
    editAsync();
    tick(500);
    expect(component.editing).toBe(true);
    expect(component.edit).toHaveBeenCalledTimes(1);
  }));

});
