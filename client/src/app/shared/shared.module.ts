import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MessageComponent } from "./message/message.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [MessageComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [MessageComponent, NavbarComponent]
})
export class SharedModule {}
