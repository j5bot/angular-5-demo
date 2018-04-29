import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { EnterButtonComponent } from './enter-button/enter-button.component';

const EXPECTED_APP_TITLE = 'We\'d Love Your Feedback!';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let debugElement: DebugElement;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      debugElement = fixture.debugElement;
      app = debugElement.componentInstance;
      compiled = debugElement.nativeElement;

      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title property "${ EXPECTED_APP_TITLE }"`, async(() => {
    expect(app.title).toEqual(EXPECTED_APP_TITLE);
  }));

  it('should render page title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent).toContain(app.title);
  }));

  it('should have text defined for the button', async(() => {
    expect(app.enterText).toBeTruthy();
  }));

  it('should render the enter text in a button', async(() => {
    expect(compiled.querySelector('button').textContent).toContain(app.enterText);
  }));

  it('should be start a state where no modal will be rendered', async(() => {
    expect(app.showFeedbackModal).toBe(false);
  }));

  it('should be able to collect feedback', async(() => {
    expect(app.feedback).toBeTruthy();
  }));

  it('should be able to collect a submission', async(() => {
    expect(app.submission).toBeTruthy();
  }));

});
