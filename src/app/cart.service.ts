import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }


  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}