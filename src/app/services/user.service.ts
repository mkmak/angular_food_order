import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogin = new BehaviorSubject<boolean>(false);
  currUser = new BehaviorSubject<any>({
    id: null,
    name: null,
    email: null,
    password: null
  });

  baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }
}
