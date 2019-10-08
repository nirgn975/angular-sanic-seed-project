import { createAction, props } from '@ngrx/store';

import { UsersResponse, User } from '../models/user.model';

export const fetchUsers = createAction(
  '[Users Page] Fetch Users',
);

export const fetchUsersSuccess = createAction(
  '[Users Page] Fetch Users Success',
  props<{ payload: UsersResponse }>(),
);

export const fetchUsersFailed = createAction(
  '[Users Page] Fetch Users Failed',
  props<{ error: any }>(),
);
