import { User } from '../models/user';
import * as user from '../actions/user';

export interface State {
  entities: User[];
}

export const initialState: State = {
  entities: [{
    url: '',
    username: '',
    email: '',
    groups: [],
  }],
};

export function reducer(state = initialState, action: user.Actions): State {
  switch (action.type) {
    case user.LOAD_USERS: {
      return initialState;
    }

    case user.LOAD_USERS_SUCCESS: {
      const newEntities = { entities: action.payload };

      return Object.assign({}, state, newEntities);
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
