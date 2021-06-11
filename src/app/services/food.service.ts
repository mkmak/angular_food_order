import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl = 'http://localhost:3000/foods';

  constructor(private http: HttpClient) { }

  getFoodList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
