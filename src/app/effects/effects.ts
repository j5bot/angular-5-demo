import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
// import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { map, switchMap } from 'rxjs/operators';

import { AppActionTypes } from '../actions/app';
import { FeedbackActionTypes } from '../actions/feedback';
import { FeedbackComponent } from '../containers/feedback/feedback.component';

const toPayload = (action) => action.payload;

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private dialog: MatDialog
  ) {}

  @Effect()
  public showFeedbackModal: Observable<Action> =
  this.actions$.pipe(
      ofType( AppActionTypes.OpenEnterFeedbackModal ),
      map( toPayload ),
      switchMap( (payload) => {
        const dialogRef = this.dialog.open( FeedbackComponent, {
          width: '600px',
          height: '600px'
        });
        //TODO: dispatch action to store dialogRef
        return empty();
      })
    );

}
