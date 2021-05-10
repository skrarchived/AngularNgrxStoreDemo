import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  { path: "add", component: AddComponent },
  { path: "list", component: ListComponent },
  { path: "**", redirectTo: "list" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
