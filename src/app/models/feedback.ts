import { Observable } from 'rxjs/Observable';

export class Feedback {

  constructor(
    public feedback: string,
    public name?: string,
    public email?: string,
    public phone?: string
  ) {}

}

export class FeedbackState {

  submitted: Observable<boolean>;
  confirmed: Observable<boolean>;
  error: Observable<boolean>;
  errorMessage: Observable<string>;

  feedback: Observable<Feedback>;
  submission: Observable<Feedback>;

}
