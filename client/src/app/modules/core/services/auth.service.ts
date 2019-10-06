import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthToken } from '../models/auth.model';
import { environment } from '../../../../environments/environment';

@Injectable({
providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient,
) { }

refreshToken(): Observable<AuthToken> {
  const refreshToken = localStorage.getItem('asspRefreshToken');
  return this.http.post<AuthToken>(`${environment.backend}/auth/refresh`, {refreshToken}).pipe(
    tap(res => {
      localStorage.setItem("asspToken", res.token);
      localStorage.setItem("asspRefreshToken", res.refreshToken);
    })
  );
}
}
