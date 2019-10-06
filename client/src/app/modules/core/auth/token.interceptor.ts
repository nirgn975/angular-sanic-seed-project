import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('asspToken');
    if (token) {
      request = this.addAccessTokenToRequest(request, token);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          if (error.error._message == 'Token Expired') {
            // Token refreshing.
            return this.handle401Error(request, next);
          } else {
            // Logout from account.
            localStorage.removeItem('asspToken');
            localStorage.removeItem('asspRefreshToken');
            this.router.navigate(['/signin']);
            return next.handle(request);
          }
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addAccessTokenToRequest(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'access-token': token,
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    this.refreshTokenSubject.next(null);

    return this.authService.refreshToken().pipe(
      switchMap((token: any) => {
        this.refreshTokenSubject.next(token.token);
        return next.handle(this.addAccessTokenToRequest(request, token.token));
      })
    );
  }

}
