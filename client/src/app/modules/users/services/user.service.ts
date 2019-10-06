import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User, UsersResponse, UserResponse } from '../models/user.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`${environment.backend}/user`);
  }
}
