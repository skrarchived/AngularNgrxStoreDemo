import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseUrl = "http://localhost:3000/products/";

  getProducts() {
    return this.http.get(this.baseUrl).pipe(catchError(this.handleError));
  }

  getProduct(productId) {
    return this.http.get(this.baseUrl + 'detail/' + productId);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  baseUrl2 = "http://localhost:3000/cart/";
  addToCart(productId) {
    return this.http.post(this.baseUrl2, { productId: productId });
  }
}
