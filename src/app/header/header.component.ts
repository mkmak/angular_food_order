import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin = false;
  currUser: User|null = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.isLogin.subscribe(value => this.isLogin = value);
    this.userService.currUser.subscribe(value => this.currUser = value);
  }

  logoutUser() {
    this.userService.isLogin.next(false);
    this.userService.currUser.next(null);
    this.router.navigate(['register']);
  }
}
