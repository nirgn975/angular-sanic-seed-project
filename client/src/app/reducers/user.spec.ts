import { reducer } from './index';

describe('reducers', () => {
  it('should handle "Load User" actions', () => {
    let state;
    state = reducer({
      user: [{
        url: '',
        username: '',
        email: '',
        groups: []
      }]}, {type: '[User] Load User'});
    expect(state).toEqual({
      user: [{
        url: '',
        username: '',
        email: '',
        groups: []
      }]
    });
  });

  it('should handle "Load User Success" actions', () => {
    let state;
    state = reducer({
      user: [{
        url: '',
        username: '',
        email: '',
        groups: []
      }]
    }, {
      payload: [{
        url: 'http://localhost:4200/api/users/2/',
        username: 'nir',
        email: '',
        groups: []
      }, {
        url: 'http://localhost:4200/api/users/1/',
        username: 'admin',
        email: 'admin@example.com',
        groups: []
      }], type: '[User] Load User Success'});
    expect(state).toEqual({
      user: [{
        url: 'http://localhost:4200/api/users/2/',
        username: 'nir',
        email: '',
        groups: []
      }, {
        url: 'http://localhost:4200/api/users/1/',
        username: 'admin',
        email: 'admin@example.com',
        groups: []
      }]
    });
  });
});
