import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AllComponent } from "./all/all.component";
import { DetailComponent } from "./detail/detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { CartComponent } from "./cart/cart.component";

import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AllComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, SharedModule]
})
export class UserModule {}
