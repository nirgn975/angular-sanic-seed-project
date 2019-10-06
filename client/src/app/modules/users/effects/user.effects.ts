import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import {
  fetchUsers, fetchUsersSuccess, fetchUsersFailed,
} from '../actions/user.actions';
import { UserService } from '../services/user.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackMessageComponent } from '../../core/components/feedback-message/feedback-message.component';


@Injectable()
export class UserEffects {

  loadAllusers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsers),
      exhaustMap(action =>
        this.userService.getUsers().pipe(
          map(data => fetchUsersSuccess({payload: data})),
          catchError(error => of(fetchUsersFailed({error})))
        )
      )
    )
  );

  loadAllUsersFailed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUsersFailed),
      tap((action) => {
        this._snackBar.openFromComponent(FeedbackMessageComponent, {
          duration: 5000,
          data: `Load data failed, because: ${action.error.message}`,
        });
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private _snackBar: MatSnackBar,
  ) {}

}
