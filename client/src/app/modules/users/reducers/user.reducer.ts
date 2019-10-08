import { Action, createReducer, on } from '@ngrx/store';

import { UsersResponse } from '../models/user.model';
import * as UserActions from '../actions/user.actions';


export type State = UsersResponse;

export const initialState: State = {
  _message: '',
  users: [{
    _id: 1,
    name: '',
    age: '',
    email: '',
    date_joined: 12,
    dirty_fields: [],
  }]
};

const userReducer = createReducer(
  initialState,
  on(UserActions.fetchUsers, (state, action) => ({ ...state })),
  on(UserActions.fetchUsersSuccess, (state, action) => action.payload ),
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
