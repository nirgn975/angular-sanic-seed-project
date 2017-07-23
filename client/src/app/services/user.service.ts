import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  private appendToken(): RequestOptions {
    const headers = new Headers();
    headers.append('Authorization', `Basic ${btoa('admin:pass')}`);
    return new RequestOptions({ headers: headers });
  }

  getUsers(): Observable<User[]> {
    const options = this.appendToken();

    return this.http.get(`${environment.server}/api/users`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
