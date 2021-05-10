import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  baseUrl = "http://localhost:3000/cart/";

  getCartProducts() {
    return this.http.get(this.baseUrl);
  }

  addToCart(productId) {
    return this.http.post(this.baseUrl + "add", { productId });
  }

  removeFromCart(productId) {
    return this.http.post(this.baseUrl + "remove", { productId });
  }

  emptyCart() {
    return this.http.delete(this.baseUrl + "empty");
  }
}
