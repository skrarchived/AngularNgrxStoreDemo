import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddProductComponent } from "./add-product/add-product.component";
import { AuthGuard } from "../auth.guard";
import { SuperAdminGuard } from "./super-admin.guard";

const routes: Routes = [
  {
    path: "admin",
    children: [
      {
        path: "addproduct",
        component: AddProductComponent,
        canActivate: [AuthGuard, SuperAdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
