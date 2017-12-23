import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOAD_USERS =  '[User] Load Users';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;

  constructor() { }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) { }
}

export type Actions
  = LoadUsersAction
  | LoadUsersSuccessAction;
