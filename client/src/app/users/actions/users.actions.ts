import { Action } from '@ngrx/store';

import { User, UsersResponse } from '../models/user.model';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load All Users',
  LoadUsersSuccess = '[Users] Load All Users Success',
  LoadUsersFailed = '[Users] Load All Users Failed',
}

export class LoadUsersAction implements Action {
  readonly type = UsersActionTypes.LoadUsers;

  constructor() {}
}

export class LoadUsersSuccessAction implements Action {
  readonly type = UsersActionTypes.LoadUsersSuccess;

  constructor(public payload: UsersResponse) {}
}

export class LoadUsersFailedAction implements Action {
  readonly type = UsersActionTypes.LoadUsersFailed;

  constructor(public payload: any) {}
}

export type UsersActions
  = LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersFailedAction;
