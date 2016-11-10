import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class UsersActions {
  static LOAD_USERS = '[USERS] Load Buzzs';
  loadUsers(): Action {
    return {
      type: UsersActions.LOAD_USERS
    };
  }

  static LOAD_USERS_SUCCESS = '[USERS] Load Buzzs Success';
  loadUsersSuccess(users): Action {
    return {
      type: UsersActions.LOAD_USERS_SUCCESS,
      payload: users
    };
  }
}
