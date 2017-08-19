import { reducer } from './user';
import * as fromUsers from './user';
import {
  LoadUserAction,
  LoadUserSuccessAction,
} from '../actions/user';
import { User } from '../models/user';

describe('UsersReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromUsers.initialState);
    });
  });

  describe('LOAD_USER & LOAD_USER_SUCCESS', () => {
    function noExistingUsers(action: any) {
      const noUser = {
        url: '',
        username: '',
        email: '',
        groups: [],
      } as User;
      const createAction = new action([noUser]);

      const expectedResult = {
        entities: [noUser],
      };

      const result = reducer(fromUsers.initialState, createAction);
      expect(result).toEqual(expectedResult);
    }

    function existingUsers(action: any) {
      const user1 = {
        url: 'www.nirgn.com',
        username: 'nirgn',
        email: 'nirgn@example.com',
        groups: [
          'admin'
        ],
      } as User;
      const user2 = {
        url: 'www.adisaar.com',
        username: 'adisaar',
        email: 'adisaar@example.com',
        groups: [
          'user'
        ]
      } as User;
      const initialState = {
        entities: [user1, user2],
      } as any;

      // should replace existing users
      const user3 = {
        url: 'www.avigalon.com',
        username: 'avigalon',
        email: 'avigalon@example.com',
        groups: [
          'user'
        ]
      } as User;
      const createAction = new action([user3]);

      const expectedResult = {
        entities: [user3]
      };

      const result = reducer(initialState, createAction);
      expect(result).toEqual(expectedResult);
    }

    it('should add all users in the payload when none exist', () => {
      noExistingUsers(LoadUserAction);
    });

    it('should add only new users when users already exist', () => {
      existingUsers(LoadUserSuccessAction);
    });
  });

  describe('Selections', () => {
    const user1 = {
      url: 'www.nirgn.com',
      username: 'nirgn',
      email: 'nirgn@example.com',
      groups: [
        'admin'
      ],
    } as User;
    const user2 = {
      url: 'www.adisaar.com',
      username: 'adisaar',
      email: 'adisaar@example.com',
      groups: [
        'user'
      ]
    } as User;
    const state: fromUsers.State = {
      entities: [user1, user2],
    };

    describe('getEntities', () => {
      it('should return entities', () => {
        const result = fromUsers.getEntities(state);
        expect(result).toBe(state.entities);
      });
    });
  });
});
