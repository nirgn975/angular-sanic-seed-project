import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get('/api/users')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
