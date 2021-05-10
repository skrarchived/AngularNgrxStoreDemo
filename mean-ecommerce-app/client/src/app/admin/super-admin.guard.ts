import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SuperAdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next, state) {
    if (localStorage.getItem("isSuperAdmin") === "true") {
      return true;
    }
    alert("Access Denied");
    this.router.navigate(["/"]);
    return false;
  }
}
