import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';

import { login, loginSuccess, loginFailed } from '../actions/login.actions';
import { SigninService } from '../services/signin.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackMessageComponent } from '../../core/components/feedback-message/feedback-message.component';


@Injectable()
export class LoginEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(action =>
        this.authService.login(action.username, action.password).pipe(
          map(token => loginSuccess(token)),
          catchError(error => of(loginFailed({error})))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(action => {
        localStorage.setItem('dseAdminToken', action.token);
        localStorage.setItem('dseAdminRefreshToken', action.refreshToken);
        this.router.navigate(['/dashboard/main']);
      })
    ),
    { dispatch: false }
  );

  loginFailed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginFailed),
      tap((action) => {
        this._snackBar.openFromComponent(FeedbackMessageComponent, {
          duration: 5000,
          data: action.error.error,
        });
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: SigninService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}

}
