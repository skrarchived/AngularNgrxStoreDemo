import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  addForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle("UserListApp | Add");
  }

  addUser() {
    this.userService.addUser(this.addForm.value).subscribe(result => {
      this.router.navigate(["/list"]);
    });
  }
}
