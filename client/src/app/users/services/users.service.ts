import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UsersResponse } from '../models/user.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`${environment.backend}/users`);
  }
}
