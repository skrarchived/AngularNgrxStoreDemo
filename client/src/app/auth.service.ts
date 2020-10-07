import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRandom() {
    let headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.getToken(),
    });
    return this.http.get(
      this.baseUrl + '/random'
      // {headers: headers,}
    );
  }

  login(user) {
    return this.http.post(this.baseUrl + '/login', user);
  }

  logout() {
    this.removeTokens();
  }

  refreshToken() {
    return this.http.post(this.baseUrl + '/refresh', {
      refresh: this.getRefreshToken(),
    });
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setRefreshToken(token) {
    localStorage.setItem('refresh', token);
  }

  getRefreshToken() {
    return localStorage.getItem('refresh');
  }

  removeTokens() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
  }

  isToken() {
    return !!localStorage.getItem('token');
  }

  isRefreshToken() {
    return !!localStorage.getItem('refresh');
  }
}
