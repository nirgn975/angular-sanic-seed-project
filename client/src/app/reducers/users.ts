import { Action } from '@ngrx/store';

import { User } from '../models';
import { UsersActions } from '../actions';

export type UsersState = User[];

const initialState: UsersState = [{
  name: ''
}];

export default function (state = initialState, action: Action): UsersState {
  switch (action.type) {
    case UsersActions.LOAD_USERS: {
      return initialState;
    }
    case UsersActions.LOAD_USERS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
