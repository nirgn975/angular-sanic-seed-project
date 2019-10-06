import { createAction, props } from '@ngrx/store';


export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ token: string, refreshToken: string}>()
);

export const loginFailed = createAction(
  '[Login Page] Login Failed',
  props<{ error: any }>(),
);
