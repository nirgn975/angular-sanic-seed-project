import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as UserActions from '../../actions/user.actions';
import { User } from '../../models/user.model';
import * as fromUsers from '../../reducers';

@Component({
  selector: 'assp-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  showSpinner: boolean = true;
  allUsers: Array<User>;
  usersState$;

  constructor(
    private store: Store<fromUsers.State>,
  ) { }

  ngOnInit() {
    console.log("in ngOnInit");
    this.store.dispatch(UserActions.fetchUsers());

    this.usersState$ = this.store.pipe(select(fromUsers.getUsers))
      .subscribe((state: any) => {
        this.allUsers = state.users;

        // Stop spinner if there is any data.
        if (this.allUsers.length >= 1) {
          this.showSpinner = false;
        }
      });
  }

  ngOnDestroy() {
    this.usersState$.unsubscribe();
  }

}
