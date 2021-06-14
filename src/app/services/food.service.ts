import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Food } from '../interfaces/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl = 'http://localhost:3000/foods';

  constructor(private http: HttpClient) { }

  getFoodList() {
    return this.http.get<[Food]>(this.baseUrl);
  }
}
