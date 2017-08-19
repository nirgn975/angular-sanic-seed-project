import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserEffects } from './user';
import { User } from '../models/user';
import * as userAction from '../actions/user';
import { UserService } from '../services/user.service';

describe('UserEffects', () => {
  let effects: UserEffects;
  const actions: Observable<any> = Observable.of('');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions),
        // other providers
        UserService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
      ],
    });

    effects = TestBed.get(UserEffects);
  });

  it('should create the effects', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('loadQuarters$ should work', () => {
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
    const users = [user1, user2];

    const action = new userAction.LoadUserAction();
    const completion = new userAction.LoadUserSuccessAction(users);
    const someAction = new ReplaySubject(1);
    someAction.next(action);

    effects.loadUser$.subscribe(result => {
        expect(result).toBe(completion);
      });
  });
});
