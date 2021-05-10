import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "user-signup",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signupForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(4)]]
  });
  ngOnInit() {}
  error;

  signupUser() {
    this.authService.registerUser(this.signupForm.value).subscribe(
      result => {
        this.router.navigate(["/login"]);
      },
      err => {
        this.error = err.error;
      }
    );
  }
}
