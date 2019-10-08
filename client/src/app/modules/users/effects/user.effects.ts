import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import {
  fetchUsers, fetchUsersSuccess, fetchUsersFailed,
} from '../actions/user.actions';
import { UserService } from '../services/user.service';


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

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}

}
