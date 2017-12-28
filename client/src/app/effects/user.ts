import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';

import { UserService } from '../services/user.service';
import * as userActions from '../actions/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  @Effect()
  loadUser$: Observable<Action> = this.actions$
    .ofType<userActions.LoadUsersAction>('LOAD_USERS')
    .switchMap(_ => this.userService.getUsers()
      .map(data => new userActions.LoadUsersSuccessAction(data))
      .catch(() => of({ type: 'LOAD_USERS_FAILED' }))
    );
}
