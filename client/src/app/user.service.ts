import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  // baseUrl = "http://localhost:3000/user/";
  baseUrl = "/api/user/";

  addUser(user) {
    return this.http.post(this.baseUrl, user);
  }

  getUsers() {
    return this.http.get(this.baseUrl);
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + userId);
  }
}
