import { Action, createReducer, on } from '@ngrx/store';

import { UsersResponse } from '../models/user.model';
import * as UserActions from '../actions/user.actions';


export type State = UsersResponse;

export const initialState: State = {
  _message: '',
  users: [{
    _id: '',
    updatedAt: '',
    createdAt: '',
    email: '',
    username: '',
    auth: '',
    role: '',
    active: true,
    firstName: '',
    lastName: '',
    __v: 0,
  }]
};

const userReducer = createReducer(
  initialState,
  on(UserActions.fetchUsers, (state, action) => ({ ...state })),
  on(UserActions.fetchUsersSuccess, (state, action) => action.payload ),

  on(UserActions.createUserSuccess, (state, action) => {
    state.users.unshift(action.payload.user);
    return Object.assign({}, state, {_message: action.payload._message});
  }),
  on(UserActions.editUserSuccess, (state, action) => {
    const newUsers = state.users.map((user) => {
      return user._id != action.payload.user._id ? user : action.payload.user;
    });

    return Object.assign({}, {_message: action.payload._message}, {users: newUsers});
  }),
  on(UserActions.deleteUserSuccess, (state, action) => {
    const newUsersResult = state.users.filter(element => element._id !== action.payload.user._id);
    return Object.assign({}, state, {_message: action.payload._message}, {users: newUsersResult});
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
