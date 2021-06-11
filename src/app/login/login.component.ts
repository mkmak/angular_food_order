import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fg: any;
  errorMsg = '';

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  goToForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  loginUser() {
    if(this.fg.valid) {
      this.userService.getUserList().subscribe(users => {
        let currUser = users.filter((user: any) => 
          (user.email === this.fg.get('email').value && user.password === this.fg.get('password').value));
        if(currUser.length > 0) {
          this.userService.isLogin.next(true);
          this.userService.currUser.next(currUser[0]);
          this.router.navigate(['food-list']);
        }
        else 
          this.errorMsg = 'Account not found. Please register first.';
      });
    }
  }
}
