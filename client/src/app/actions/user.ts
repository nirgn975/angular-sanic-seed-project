import { Action } from '@ngrx/store';
import { User } from '../models/user';

export const LOAD_USER =  '[User] Load User';
export const LOAD_USER_SUCCESS = '[User] Load User Success';

export class LoadUserAction implements Action {
  readonly type = LOAD_USER;

  constructor() { }
}

export class LoadUserSuccessAction implements Action {
  readonly type = LOAD_USER_SUCCESS;

  constructor(public payload: User[]) { }
}

export type Actions
  = LoadUserAction
  | LoadUserSuccessAction;
