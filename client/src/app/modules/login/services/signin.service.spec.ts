import { TestBed } from '@angular/core/testing';

import { SigninService } from './signin.service';

describe('SigninService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninService = TestBed.get(SigninService);
    expect(service).toBeTruthy();
  });
});
