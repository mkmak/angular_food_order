import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';
import { MustMatchValidator } from './must-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fg: any;
  errorMsg = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    }, {
      validators: [MustMatchValidator.validate]
    });
  }

  registerUser() {
    if(this.fg.valid) {
      this.userService.getUserList().subscribe(users => {
        if(users.filter((user: any) => user.email === this.fg.get('email').value).length > 0) 
          this.errorMsg = 'Account already exist. Please login.';
        else {
          let currUser = {
            name: this.fg.get('name').value,
            email: this.fg.get('email').value,
            password: this.fg.get('password').value,
            phone: null,
            profession: '',
            interest: [],
            image: '../assets/images/blank_profile.png',
            cart: []
          };
          this.userService.addUser(currUser).subscribe(user => {
            this.userService.isLogin.next(true);
            this.userService.currUser.next(user);
            this.router.navigate(['food-list']);
          });
        }
      });
    }
  }

}
