import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import reducer from './reducers';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersActions } from './actions';
import { UsersEffects } from './effects';
import { UsersService } from './services';

import { UserListComponent } from './components';
import { UserComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
