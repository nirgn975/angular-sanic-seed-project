import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { UsersActions } from '../actions';
import { UsersService } from '../services';

@Injectable()
export class UsersEffects {
    constructor (
      private update$: Actions,
      private usersActions: UsersActions,
      private svc: UsersService,
    ) {}

    @Effect() loadUsers$ = this.update$
      .ofType(UsersActions.LOAD_USERS)
      .switchMap(() => this.svc.getUsers())
      .map(users => this.usersActions.loadUsersSuccess(users));
}
