import { Observable } from 'rxjs/Observable';

export class AppState {

  title: Observable<string>;
  message: Observable<string>;
  showButtonText: Observable<string>;
  showFeedback: Observable<boolean>;
  error: Observable<boolean>;
  errorMessage: Observable<string>;

}
