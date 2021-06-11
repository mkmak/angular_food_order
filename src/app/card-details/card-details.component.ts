import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  cardList: any;

  constructor(private router: Router, 
    private cardService: CardService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.cardService.getCardList().subscribe(cards => {
      this.userService.currUser.subscribe(user => {
        this.cardList = cards.filter(card => card.userId === user.id);
      });
    });
  }

  toAddCard() {
    this.router.navigate(['add-card']);
  }

  toEditCard(id: any) {

  }

  deleteCard(id: any) {

  }
}
