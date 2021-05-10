import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = "http://localhost:3000/user/";

  registerUser(user) {
    return this.http
      .post(this.baseUrl + "register", user)
      .pipe(catchError(this.handleError));
  }

  loginUser(user) {
    return this.http
      .post(this.baseUrl + "login", user)
      .pipe(catchError(this.handleError));
  }

  saveToken(token) {
    localStorage.setItem("token", token);
  }

  removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("isSuperAdmin");
  }

  isSuperAdmin() {
    return !!localStorage.getItem("isSuperAdmin");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  checkToken() {
    return !!localStorage.getItem("token");
  }

  getUserDetail() {
    return this.http.get(this.baseUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
