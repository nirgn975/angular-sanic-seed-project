import { TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

import { UserEffects } from './user';
import { UserService } from '../services/user.service';
import * as userAction from '../actions/user';

describe('UsersEffects', () => {
  const userServiceStub = {};
  let runner: EffectsRunner;
  let userEffects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule,
      ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        UserEffects,
      ]
    });
  });

  beforeEach(inject([
      EffectsRunner, UserEffects
    ],
    (_runner, _userEffects) => {
      runner = _runner;
      userEffects = _userEffects;
    }
  ));

  it('should create the service', inject([UserEffects], (service: UserEffects) => {
    expect(service).toBeTruthy();
  }));

  it('should return a LOAD_USER_SUCCESS action after LOAD_USER', () => {
    runner.queue({ type: 'LOAD_USER' });

    userEffects.loadUser$.subscribe(result => {
      expect(result).toEqual({ type: 'LOAD_USER_SUCCESS' });
    });
  });
});
