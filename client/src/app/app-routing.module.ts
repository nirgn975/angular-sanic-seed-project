import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuard } from './modules/core/guards/logged-in.guard';

import { FileNotFoundComponent } from './modules/core/components/file-not-found/file-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'users', loadChildren: './modules/users/users.module#UsersModule' },
  { path: '**', component: FileNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
