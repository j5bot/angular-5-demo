import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../modules/material-module';
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
        MaterialModule
      ],
      declarations: [
        EnterButtonComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterButtonComponent);
    instance = fixture.componentInstance;

    fixture.detectChanges();

    instance.text = 'Foo';
    instance.icon = 'chat_bubble_outline';

    fixture.detectChanges();

  });

  it('should compile', () => {
    expect(instance).toBeTruthy();
  });

  it('should have button text', () => {
    expect(instance.text).toBeNonEmptyString();
  });

  it('should have an icon', () => {
    expect(instance.icon).toBeNonEmptyString();
  });

  it('should have a click handler', () => {
    expect(instance.click).toBeFunction();
  });

  it('should match previous snapshot in default state', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should emit an event if it has been clicked', () => {
    spyOn(instance, 'click');
    instance.click({});

    expect(instance.click).toHaveBeenCalledTimes(1);
  });

});
