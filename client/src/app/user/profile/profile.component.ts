import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "user-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userProfile: any;

  ngOnInit() {
    this.authService.getUserDetail().subscribe(
      (result: any) => {
        this.userProfile = result;
      },
      err => {
        this.authService.removeToken();
        this.router.navigate(["/login"]);
      }
    );
  }
}
