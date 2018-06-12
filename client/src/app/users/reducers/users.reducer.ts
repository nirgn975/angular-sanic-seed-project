import { Action } from '@ngrx/store';
import { UsersActions, UsersActionTypes } from '../actions/users.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {

    case UsersActionTypes.LoadUsers:
      return state;

    case UsersActionTypes.LoadUsersSuccess:
      return state;

    default:
      return state;
  }
}
