import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RandomComponent } from './random/random.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: RandomComponent },
  { path: 'login', component: LoginComponent },
  { path: 'random', component: RandomComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
