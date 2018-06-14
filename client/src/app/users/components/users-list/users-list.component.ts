import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromRoot from '../../reducers';
import { User } from '../../models/user.model';
import { LoadUsersAction } from '../../actions/users.actions';

@Component({
  selector: 'client-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsersAction());
  }

}
