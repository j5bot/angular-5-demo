import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { marbles } from 'rxjs-marbles/jest';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, State } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '../../../modules/material-module';

import { AppComponent } from './app.component';
import * as AppActions from '../../actions/app';
import * as fromApp from '../../reducers/app';
import * as selectors from '../../selectors/selectors';

const defaultState fromApp.defaultPresentationState;

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<State>;
  let instance: AppComponent;
  let debugElement: DebugElement;
  let nativeElement: any;
  let dispatch: any;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot( reducers )
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    instance = fixture.componentInstance as any;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;

    fixture.detectChanges();

    dispatch = spyOn(store, 'dispatch');
  });

  it('should not be undefined', () => {

    expect(instance).toBeTruthy();

  });

  /**
   * Container components are used as integration points for connecting
   * the store to presentational components and dispatching
   * actions to the store.
   *
   * Container methods that dispatch events are like a component's output
   * observables.  Container properties that select state from store are like a
   * component's input properties.  If pure components are functions of their
   * inputs, containers are functions of state
   *
   * Traditionally you would query the components rendered template
   * to validate its state. Since the components are analogous to
   * pure functions, we take snapshots of these components for a given state
   * to validate the rendered output and verify the component's output
   * against changes in state.
   */
   it('should match the default state snapshot', async(() => {
     expect(fixture).toMatchSnapshot();
   }));

   it('should have the default title', marbles((m) => {
     const expected = m.cold('a', { a: defaultState.title });
     m.expect(instance.title())
      .toBeObservable(expected);
   }));

   it('should have the default message', marbles((m) => {
     const expected = m.cold('a', { a: defaultState.message });
     m.expect(instance.message())
      .toBeObservable(expected);
   }));

   it('should have the default button text', marbles((m) => {
     const expected = m.cold('a', { a: defaultState.showButtonText });
     m.expect(instance.showButtonText())
      .toBeObservable(expected);
   }));

   it('should start with the feedback modal not shown', marbles((m) => {
     const expected = m.cold('a', { a: defaultState.showFeedback });
     m.expect(instance.showFeedback())
      .toBeObservable(expected);
   }));

   it('should render the title', () => {
     expect(nativeElement.querySelector('h1').textContent)
      .toContain(defaultState.title);
   });

   it('should render the message', () => {
     expect(nativeElement.querySelector('p').textContent)
      .toContain(defaultState.message);
   });

   it('should render the button text', () => {
     expect(
       nativeElement.querySelector('button').textContent.toLowerCase()
     ).toContain(defaultState.showButtonText.toLowerCase());
   });

   it('should dispatch an open enter feedback modal event', () => {
     const $event: any = {};
     const action = new AppActions.OpenEnterFeedbackModal($event);

     instance.enterFeedback($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
