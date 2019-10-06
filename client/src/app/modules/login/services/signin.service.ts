import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Token, LoginInfo } from '../models/login.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${environment.backend}/auth/signin`, {username, password});
  }
}
