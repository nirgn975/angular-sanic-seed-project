import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';
import * as user from '../actions/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  @Effect()
  loadUser$: Observable<Action>= this.actions$
    .ofType(user.LOAD_USER)
    .switchMap(() => this.userService.getUsers())
    .map(users => new user.LoadUserSuccessAction(users));

}
