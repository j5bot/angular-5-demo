import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import { AppComponent } from './app.component';
import * as AppActions from '../../actions/app';
import * as fromApp from '../../reducers/app';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<fromApp.State>;
  let instance: AppComponent;
  let dispatch: any;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          app: fromApp.reducer
        })
      ],
      declarations: [
        AppComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    instance = fixture.componentInstance;

    fixture.detectChanges();

    dispatch = spyOn(store, 'dispatch');
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

   xit('should have a title', () => {
     fixture.detectChanges();
   });

   it('should dispatch an open enter feedback modal event', () => {
     const $event: any = {};
     const action = new AppActions.OpenEnterFeedbackModal($event);

     instance.enterFeedback($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
