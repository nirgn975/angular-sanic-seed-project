import { Action } from '@ngrx/store';

import { User } from '../models/user.model';
import { UsersActions, UsersActionTypes } from '../actions/users.actions';

export type  State = User[];

export const initialState: State = [{
  'age': '',
  'date_joined': 0,
  'dirty_fields': [],
  'email': '',
  'id': 0,
  'name': '',
}];

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {

    case UsersActionTypes.LoadUsers:
      return state;

    case UsersActionTypes.LoadUsersSuccess:
      return action.payload.users;

    default:
      return state;
  }
}
