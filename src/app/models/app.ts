import { Observable } from 'rxjs/observable';

export class AppState {

  title: Observable<string>;
  message: Observable<string>;
  showButtonText: Observable<string>;
  showFeedback: Observable<boolean>;
  error: Observable<boolean>;
  errorMessage: Observable<string>;

}
