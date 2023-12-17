import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProducts} from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = 'http://localhost/api/products';
  urlBasket: string = 'http://localhost/api/basket';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`);
  }

  postProduct(product: IProducts) {
    return this.http.post<IProducts>(this.url, product)
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  postProductToBasket(product: IProducts) {
    return this.http.post<IProducts>(this.urlBasket, product)
  }

  getProductFromBasket() {
    return this.http.get<IProducts[]>(this.urlBasket);
  }
}
