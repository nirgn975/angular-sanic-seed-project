import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';

import { LoginRoutingModule } from './login-routing.module';
import { reducers, metaReducers } from './reducers';

import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { SigninService } from './services/signin.service';

import { LoginEffects } from './effects/login.effects';

import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', reducers, { metaReducers: metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [
    SigninService,
  ],
})
export class LoginModule { }
