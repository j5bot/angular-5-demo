import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { marbles } from 'rxjs-marbles/jest';
import { testObservable } from '../../../../modules/test-utilities';

import { StoreModule, Store } from '@ngrx/store';
import { reducers, State } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '../../../modules/material-module';

import { AppComponent } from './app.component';
import * as AppActions from '../../actions/app';
import * as fromApp from '../../reducers/app';
import * as selectors from '../../selectors/selectors';

const defaultState = fromApp.defaultPresentationState;

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<State>;
  let instance: AppComponent;
  let dispatch: any;

  beforeAll( () => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot( reducers )
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    instance = fixture.componentInstance as any;
  });

  beforeEach( () => {
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

     async testObservable({
       fn: fixture.whenStable.bind(fixture),
       marble: m,
       expected: defaultState.title,
       result: instance.title
     });

    }));

   it('should have the default message', marbles((m) => {

     async testObservable({
       fn: fixture.whenStable.bind(fixture),
       marble: m,
       expected: defaultState.message,
       result: instance.message
     });

   }));

   it('should have the default button text', marbles((m) => {

     async testObservable({
       fn: fixture.whenStable.bind(fixture),
       marble: m,
       expected: defaultState.showButtonText,
       result: instance.showButtonText
     });

   }));

   it('should start with the feedback modal not shown', marbles((m) => {

     async testObservable({
       fn: fixture.whenStable.bind(fixture),
       marble: m,
       expected: defaultState.showFeedback,
       result: instance.showFeedback
     });

   }));

   it('should dispatch an open enter feedback modal event', () => {
     const $event: any = {};
     const action = new AppActions.OpenEnterFeedbackModal($event);

     instance.enterFeedback($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
