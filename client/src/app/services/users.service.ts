import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { User } from '../models';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers(): Observable<User[]> {
  return this.http.get(`${environment.API_PATH}/users`)
    .map(res => res.json().results)
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
