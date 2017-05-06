import { TestBed, async, inject } from '@angular/core/testing';

import { UserEffects } from './user';
import { UserService } from '../services/user.service';
import * as userAction from '../actions/user';
import { EffectsTestingModule } from '@ngrx/effects/testing';

describe('UsersEffects', () => {
  const userServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule
      ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        UserEffects,
      ]
    });
  });

  it('should create the service', inject([UserEffects], (service: UserEffects) => {
    expect(service).toBeTruthy();
  }));

  // it('should get users', inject([UserEffects], (service: UserEffects) => {
  //   this.store.dispatch(new userAction.LoadUserAction());
  // }));
});
