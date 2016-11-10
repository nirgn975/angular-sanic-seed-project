import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import usersReducer, * as fromUsers from './users';

export interface AppState {
  users: fromUsers.UsersState;
};

export default compose(combineReducers)({
  users: usersReducer
});
