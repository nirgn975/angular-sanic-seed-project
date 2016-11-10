import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { UsersActions } from '../../actions';
import { User } from '../../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users: Observable<User[]>;

  constructor(
    private store: Store<AppState>,
    private usersActions: UsersActions,
  ) {
    this.users = store.select(state => state.users);
  }

  ngOnInit() {
    this.store.dispatch(this.usersActions.loadUsers());
  }

}
