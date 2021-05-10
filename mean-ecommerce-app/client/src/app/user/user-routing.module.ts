import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AllComponent } from "./all/all.component";
import { DetailComponent } from "./detail/detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { CartComponent } from "./cart/cart.component";

import { AuthGuard } from "../auth.guard";
import { Auth2Guard } from "../auth2.guard";

const routes: Routes = [
  {
    path: "all",
    component: AllComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "detail/:productId",
    component: DetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [Auth2Guard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [Auth2Guard]
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
