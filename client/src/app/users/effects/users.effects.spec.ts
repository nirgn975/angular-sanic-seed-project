import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersEffects } from './users.effects';

describe('UsersService', () => {
  let actions$: Observable<any>;
  let effects: UsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(UsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
