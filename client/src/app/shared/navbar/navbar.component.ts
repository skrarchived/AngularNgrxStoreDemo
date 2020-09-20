import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "shared-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    document.addEventListener("click", (e: any) => {
      if (!e.target.matches(".userProfile button img")) {
        this.showLink = false;
      }
    });
  }

  showLink = false;

  toogleShowLink() {
    if (this.showLink) {
      this.showLink = false;
    } else {
      this.showLink = true;
    }
  }

  checkAuth() {
    return !this.authService.checkToken();
  }

  logoutUser() {
    this.authService.removeToken();
    this.router.navigate(["/login"]);
  }

  isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
}
