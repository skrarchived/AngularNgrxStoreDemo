import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor(private userService: UserService, private title: Title) {}

  Users: any = [];
  ngOnInit() {
    this.title.setTitle("UserListApp | List");
    this.getUsers();
  }

  deleteUser(user_id) {
    this.userService.deleteUser(user_id).subscribe(result => {
      this.getUsers();
      alert("User Deleted");
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(result => {
      this.Users = result;
    });
  }
}
