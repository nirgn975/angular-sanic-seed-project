import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserResponse, User } from '../models/user';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
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
      ]
    });
  });

  it('should create the service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET all the users',
  inject([UserService, MockBackend], (service: UserService, mockBackend: MockBackend) => {
    const user1 = {
      'url': 'http://localhost:8000/api/users/2/',
      'username': 'nir',
      'email': '',
      'groups': []
    } as User;
    const user2 = {
      'url': 'http://localhost:8000/api/users/1/',
      'username': 'admin',
      'email': 'admin@example.com',
      'groups': []
    } as User;
    const mockResponse: UserResponse = {
      count: 2,
      next: null,
      previous: null,
      results: [user1, user2],
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.getUsers().subscribe(users => {
      expect(users.length).toEqual(2);
      expect(users[0].username).toEqual('nir');
      expect(users[0].url).toEqual('http://localhost:8000/api/users/2/');
      expect(users[1].username).toEqual('admin');
      expect(users[1].email).toEqual('admin@example.com');
    });
  }));

});
