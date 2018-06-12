import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';



describe('UsersService', () => {
  let injector: TestBed;
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UsersService ],
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of users list from getAllUsers', () => {
    const usersResp: User[] = [{
    }];

    service.getAllUsers().subscribe(resMonitors => {
      expect(resMonitors).toEqual(usersResp);
    });

    const req = httpMock.expectOne(`${environment.backend}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(usersResp);
  });
});
