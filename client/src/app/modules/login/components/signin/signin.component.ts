import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as LoginActions from '../../actions/login.actions';
import * as fromLogin from '../../reducers';

@Component({
  selector: 'zd-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private store: Store<fromLogin.State>,
  ) { }

  onSubmit() {
    this.store.dispatch(LoginActions.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }));
  }

  getErrorMessage(field) {
    if (this.loginForm.controls[field].hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

}
