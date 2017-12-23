import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserResponse, User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  private appendToken(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Basic ${btoa('admin:pass')}`
    });
  }

  getUsers(): Observable<User[]> {
    const headers = this.appendToken();

    return this.http.get<UserResponse>(`${environment.server}/api/users`, { headers: headers })
      .map(body => body.results);
  }

}
