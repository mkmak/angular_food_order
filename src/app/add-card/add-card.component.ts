import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  fg: any;
  errorMsg = '';

  constructor(private fb: FormBuilder, 
      private cardService: CardService, 
      private userService: UserService, 
      private router: Router) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  addCard() {
    if(this.fg.valid) {
      this.userService.currUser.subscribe(user => {
        this.cardService.addCard({
          userId: user.id,
          name: this.fg.get('name').value,
          number: this.fg.get('number').value,
          month: this.fg.get('month').value,
          year: this.fg.get('year').value,
          code: this.fg.get('code').value
        }).subscribe(card => this.router.navigate(['card-details']));
      });
    }
  }
}
