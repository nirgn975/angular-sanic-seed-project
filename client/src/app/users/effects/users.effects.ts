import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  UsersActions,
  UsersActionTypes,
  LoadUsersAction,
  LoadUsersSuccessAction,
  LoadUsersFailedAction,
} from '../actions/users.actions';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {

  @Effect()
    loadAllMonitors$: Observable<Action> = this.actions$.pipe(
      ofType<LoadUsersAction>(UsersActionTypes.LoadUsers),
      switchMap(_ => {
        return this.usersService.getAllUsers()
          .pipe(
            map(data => new LoadUsersSuccessAction(data)),
            catchError(err => of(new LoadUsersFailedAction(err)))
          );
      })
    );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}
}
