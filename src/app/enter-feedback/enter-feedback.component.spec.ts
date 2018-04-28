import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFeedbackComponent } from './enter-feedback.component';

describe('EnterFeedbackComponent', () => {
  let component: EnterFeedbackComponent;
  let fixture: ComponentFixture<EnterFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
