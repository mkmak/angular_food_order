import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  fg: any;
  user: User|null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.currUser.getValue();
    let interest = '';
    this.user?.interest.forEach((value: any, index: any, object: any) => {
      if(index < object.length - 1)
        interest += (value + ',')
    });

    this.fg = this.fb.group({
      name: [this.user?.name, Validators.required],
      phone: [this.user?.phone],
      profession: [this.user?.profession],
      interest: [interest],
      image: [this.user?.image]
    });
  }

  editUser() {
    let interest = this.fg.get('interest').value.split(",");
    interest.forEach((value: any, index: any) => {
      interest[index] = value.trim();
      if(!((/^[a-zA-z0-9 ]+$/).test(interest[index])))
        interest.splice(index, 1);
    });
    if(this.user != null) {
      this.user.name = this.fg.get('name').value;
      this.user.phone = this.fg.get('phone').value;
      this.user.profession = this.fg.get('profession').value;
      this.user.interest = interest;
      if(this.fg.get('image').value == '')
        this.user.image = '../assets/images/blank_profile.png';
      else
        this.user.image = this.fg.get('image').value;
    }
    this.userService.editUser(this.user!).subscribe(user => {
      this.userService.currUser.next(user);
      this.router.navigate(['profile']);
    });
  }
}
