import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { State } from '../../reducers';
import * as AppActions from '../../actions/app';
import * as fromApp from '../../reducers/app';
import * as fromFeedback from '../../reducers/feedback';
import * as selectors from '../../selectors/selectors';
import * as utilities from '../../../utilities/utilities';

const propertyTypes = fromApp.defaultPresentationState;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  isSubmitted$: Observable<boolean>;
  isConfirmed$: Observable<boolean>;
  feedback$: Observable<any>;

  constructor(
    private store: Store<fromApp.State>,
    private feedbackStore: Store<fromFeedback.State>) {}

  enterFeedback ( $event: AppActions.AppActionTypes ) {
    this.isSubmitted$ = this.feedbackStore.pipe(select(selectors.properties.feedback.submitted));
    this.isConfirmed$ = this.feedbackStore.pipe(select(selectors.properties.feedback.confirmed));
    this.feedback$ = this.feedbackStore.pipe(select(selectors.properties.feedback.feedback));

    return this.store.dispatch.bind(this.store)(
      new AppActions.OpenEnterFeedbackModal($event)
    );
  }
}

utilities.addPropertyGettersToPrototype({
  Component: AppComponent,
  selectors: selectors.properties.app,
  properties: Object.keys( propertyTypes )
});
