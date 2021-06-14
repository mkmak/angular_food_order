import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User|null = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.currUser.getValue();
  }

  toEditUser() {
    this.router.navigate(['edit-user']);
  }
}
