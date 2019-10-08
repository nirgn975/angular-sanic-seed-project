import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromUser from './user.reducer';

export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Layout Reducers
 */
export const getUsrsState = createFeatureSelector<fromUser.State>('users');

export const getUsers = createSelector(
  getUsrsState,
  (state: fromUser.State) => state.users
);
