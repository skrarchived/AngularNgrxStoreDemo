import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AddProductComponent } from "./add-product/add-product.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    HttpClientModule
  ]
})
export class AdminModule {}
