import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { marbles } from 'rxjs-marbles/jest';
import { testObservable } from '../../../../modules/test-utilities';

import { StoreModule, Store } from '@ngrx/store';
import { reducers, State } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '../../../modules/material-module';

//import { MatInput } from '@angular/material/input';

import { EnterFeedbackComponent } from './enter-feedback.component';

import * as FeedbackActions from '../../actions/feedback';
import * as fromFeedback from '../../reducers/feedback';
import * as selectors from '../../selectors/selectors';

describe('EnterFeedbackComponent', () => {
  let fixture: ComponentFixture<EnterFeedbackComponent>;
  let store: Store<fromFeedback.State>;
  let instance: EnterFeedbackComponent;
  let dispatch: any;

  beforeAll( () => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        // MatInput,
        // MatFormField,
        // MatRipple,
        EnterFeedbackComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterFeedbackComponent);
    store = TestBed.get(Store);
    instance = fixture.componentInstance;
  });

  beforeEach( () => {
    dispatch = spyOn(store, 'dispatch');
  } );

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

   it('should match previous snapshot', async(() => {
     fixture.detectChanges();

     expect(fixture).toMatchSnapshot();
   }));

   it('should emit an onchange event when a value changes', () => {
     spyOn(instance, 'setupEmitOnChange');

     const $event: any = {};
     const action = new FeedbackActions.SubmitFeedback($event);

     instance.setupEmitOnChange($event);

     expect(dispatch).toHaveBeenCalledWith(action);
   });

});
