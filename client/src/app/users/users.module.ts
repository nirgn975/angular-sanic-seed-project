import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserComponent,
    UsersListComponent,
  ]
})
export class UsersModule { }
