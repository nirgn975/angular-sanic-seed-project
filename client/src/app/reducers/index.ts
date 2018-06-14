import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUsers from '../users/reducers/users.reducer';

export interface State {
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUsers.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Layout Reducers
 */
export const getUsersState = createFeatureSelector<fromUsers.State>('users');
