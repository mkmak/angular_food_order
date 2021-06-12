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
      let currUserId = this.userService.currUser.getValue().id;
      this.cardList = cards.filter(card => card.userId === currUserId);
    });
  }

  toAddCard() {
    this.router.navigate(['add-card']);
  }

  toEditCard(id: any) {
    this.router.navigate(['edit-card', id]);
  }

  deleteCard(id: any) {
    this.cardService.deleteCard(id).subscribe(card => this.ngOnInit());
  }
}
