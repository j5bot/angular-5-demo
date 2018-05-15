import { Observable } from 'rxjs/observable';

export interface IFeedback {
  feedback?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export interface IFeedbackChange {
  field: string;
  value: string;
}

export class Feedback implements IFeedback {

  constructor(
    public feedback: string,
    public name?: string,
    public email?: string,
    public phone?: string
  ) {}

}

export class FeedbackChange {

  constructor(
    public field?: string,
    public value?: string
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
