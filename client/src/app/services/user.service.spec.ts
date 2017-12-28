import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { UserResponse, User } from '../models/user';
import { environment } from '../../environments/environment';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    });

    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<User[]>', () => {
      const dummyUsers = [{
        'url': 'http://localhost:8000/api/users/1/',
        'username': 'nir',
        'email': 'nir@example.com',
        'groups': []
      }, {
        'url': 'http://localhost:8000/api/users/2/',
        'username': 'adi',
        'email': 'adi@example.com',
        'groups': []
      }];
      const mockResponse: UserResponse = {
        count: 2,
        next: null,
        previous: null,
        results: dummyUsers,
      };

      service.getUsers().subscribe(users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(`${environment.server}/api/users`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
});
