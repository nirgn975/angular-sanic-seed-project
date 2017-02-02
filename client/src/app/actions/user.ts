import { Action } from '@ngrx/store';
import { User } from '../models/user';
import { type } from '../util';

export const ActionTypes = {
  LOAD_USER:                type('[User] Load User'),
  LOAD_USER_SUCCESS:        type('[User] Load User Success'),
};

export class LoadUserAction implements Action {
  type = ActionTypes.LOAD_USER;

  constructor() { }
}

export class LoadUserSuccessAction implements Action {
  type = ActionTypes.LOAD_USER_SUCCESS;

  constructor(public payload: User[]) { }
}

export type Actions
  = LoadUserAction
  | LoadUserSuccessAction;
