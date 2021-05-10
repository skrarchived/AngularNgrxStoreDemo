import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, AddComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
