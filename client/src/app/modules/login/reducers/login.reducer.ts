import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';


export interface State {
  username: string;
  password: string;
  token: string;
  refreshToken: string;
}

export const initialState: State = {
  username: '',
  password: '',
  token: '',
  refreshToken: '',
};

const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state, action) => ({ ...state, username: action.username, password: action.password })),
  on(LoginActions.loginSuccess, (state, action) => ({ ...state, token: action.token, refreshToken: action.refreshToken })),
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
