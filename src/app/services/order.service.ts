import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrderList() {
    return this.http.get<[Order]>(this.baseUrl);
  }

  addOrder(order: any) {
    return this.http.post<Order>(this.baseUrl, order);
  }

  editOrder(order: Order) {
    return this.http.put<Order>(this.baseUrl + '/' + order.id, order);
  }

  deleteOrder(id: any) {
    return this.http.delete<Order>(this.baseUrl + '/' + id);
  }
}
