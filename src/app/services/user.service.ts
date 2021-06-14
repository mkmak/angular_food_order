import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogin = new BehaviorSubject<boolean>(false);
  currUser = new BehaviorSubject<User|null>(null);

  baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<[User]>(this.baseUrl);
  }

  addUser(user: any) {
    return this.http.post<User>(this.baseUrl, user);
  }

  editUser(user: User) {
    return this.http.put<User>(this.baseUrl + '/' + user.id, user);
  }
}
