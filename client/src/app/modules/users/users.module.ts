import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UsersRoutingModule } from './users-routing.module';
import { reducers, metaReducers } from './reducers';

import { MaterialModule } from '../material/material.module';

import { UsersListComponent } from './components/users-list/users-list.component';

import { UserService } from './services/user.service';

import { UserEffects } from './effects/user.effects';

import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    StoreModule.forFeature('user', reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UserService,
  ],
})
export class UsersModule { }
