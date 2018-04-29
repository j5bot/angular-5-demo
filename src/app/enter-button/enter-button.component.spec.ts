import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
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

  it('should start out not having been clicked', async(() => {
    expect(component.clicked).toBe(false);
  }));

  it('should be clickable', fakeAsync(() => {
    fixture.detectChanges();

    expect(component.clicked).toBe(false);
    spyOn(component, 'onClick');
    clickAsync();
    tick(500);
    expect(component.clicked).toBe(true);
    expect(component.click).toHaveBeenCalledTimes(1);
  }));

});
