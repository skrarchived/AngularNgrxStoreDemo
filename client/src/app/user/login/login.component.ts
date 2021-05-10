import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "user-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });

  ngOnInit() {}
  error;

  loginUser() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      (result: any) => {
        alert("Login Success");
        console.log(result);
        if (result.user.isSuperAdmin) {
          localStorage.setItem("isSuperAdmin", "true");
        }
        this.authService.saveToken(result.token);
        this.router.navigate(["/all"]);
      },
      err => {
        this.error = err.error;
      }
    );
  }
}
