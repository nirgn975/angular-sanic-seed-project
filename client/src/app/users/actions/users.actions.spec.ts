import {
  UsersActionTypes,
  LoadUsersAction,
  LoadUsersSuccessAction,
  LoadUsersFailedAction,
} from './users.actions';

import { User } from '../models/user.model';

describe('Load Users Actions', () => {
  it('should create an action through LoadUsersAction', () => {
    const action = new LoadUsersAction();

    expect(action.type).toEqual(UsersActionTypes.LoadUsers);
  });

  it('should create an action through LoadAllMonitorsSuccessAction', () => {
    const payload: User[] = [{

    }];

    const action = new LoadUsersSuccessAction(payload);
    expect(action.type).toEqual(UsersActionTypes.LoadUsersSuccess, payload);
  });

  it('should create an action through LoadUsersFailedAction', () => {
    const payload: any = 'Error';
    const action = new LoadUsersFailedAction(payload);
    expect(action.type).toEqual(UsersActionTypes.LoadUsersFailed, payload);
  });
});
