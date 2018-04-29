import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import JasmineExpect from 'jasmine-expect';

import { DebugElement } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

import { EnterButtonComponent } from './enter-button.component';

describe('EnterButtonComponent', () => {
  let component: EnterButtonComponent;
  let fixture: ComponentFixture<EnterButtonComponent>;
  let debugElement: DebugElement;
  let compiled: any;

  const clickAsync = () => {
    timer(500).subscribe(() => {
      component.click();
    });
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterButtonComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(EnterButtonComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      compiled = debugElement.nativeElement;
    });
  }));

  it('should create enter button', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render a button', async(() => {
    expect(compiled.querySelector('button')).toBeObject();
  }));

  it('should have text defined for the button', async(() => {
    expect(component).toHaveNonEmptyString('text');
  }));

  it('should render the text in the button', async(() => {
    expect(compiled.querySelector('button').textContent).toEqual(component.text);
  }))

  it('should start out not having been clicked', async(() => {
    expect(component.clicked).toBeFalse();
  }));

  it('should have a click method', async(() => {
    expect(component.click).toBeFunction();
  }));

  it('should be clickable', fakeAsync(() => {
    fixture.detectChanges();

    expect(component.clicked).toBeFalse();
    spyOn(component, 'onClick');
    clickAsync();
    tick(500);
    expect(component.clicked).toBeTrue();
    expect(component.click).toHaveBeenCalledTimes(1);
  }));

});
