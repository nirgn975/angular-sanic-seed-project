import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

import { UsersEffects } from './effects/users.effects';

import { UsersService } from './services/users.service';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    MatCardModule,
    EffectsModule.forRoot([
      UsersEffects,
    ])
  ],
  declarations: [
    UserComponent,
    UsersListComponent,
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule { }
