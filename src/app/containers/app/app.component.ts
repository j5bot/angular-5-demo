import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from '../../reducers';
import * as AppActions from '../../actions/app';
import * as selectors from '../../selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title$: Observable<String>;
  message$: Observable<String>;
  showButtonText$: Observable<String>;

  constructor( private store: Store<State>) {
    this.title$ = this.store.select(selectors.properties.app.title);
    this.message$ = this.store.select(selectors.properties.app.message);
    this.showButtonText$ = this.store
      .select(selectors.properties.app.showButtonText);
  }

  enterFeedback( $event: AppActions.AppActionTypes ) {
    return this.store.dispatch(
      new AppActions.OpenEnterFeedbackModal($event)
    );
  }
}
