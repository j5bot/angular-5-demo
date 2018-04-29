import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { EnterButtonComponent } from './enter-button.component';

/**
 * A presentational component only derives its state from inputs and
 * communicates externally through outputs. We can use snapshot
 * tests to validate the presentation state of this component
 * by changing its inputs and snapshotting the generated
 * HTML.
 *
 * We can also use this as a validation tool against changes
 * to the component's template against the currently stored
 * snapshot.
 */
describe('EnterButtonComponent', () => {
  let fixture: ComponentFixture<EnterButtonComponent>;
  let instance: EnterButtonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        EnterButtonComponent
      ]
    });

    fixture = TestBed.createComponent(EnterButtonComponent);
    instance = fixture.componentInstance;
  });

  xit('should have button text', () => {
    expect(instance.text).toBeNonEmptyString();
  });

  xit('should have a click handler', () => {
    expect(instance.click).toBeFunction();
  });

  xit('should match previous snapshot in default state', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should change the DOM if it has been clicked', () => {
    instance.clicked = true;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  xit('should emit an event if it has been clicked', () => {
    spyOn(instance.click, 'emit');
    instance.click();

    expect(instance.click.emit).toHaveBeenCalledTimes(1);
  });

});
