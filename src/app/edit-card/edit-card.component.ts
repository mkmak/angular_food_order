import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  fg: any;
  card: any;
  errorMsg = '';

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private cardService: CardService,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.cardService.getCardList().subscribe(cards => {
      this.card = cards.filter(card => card.id.toString() === id)[0];
      this.fg = this.fb.group({
        name: [this.card.name, Validators.required],
        number: [this.card.number, Validators.required],
        month: [this.card.month, Validators.required],
        year: [this.card.year, Validators.required],
        code: [this.card.code, Validators.required]
      });
    })
  }

  editCard() {
    this.card.name = this.fg.get('name').value;
    this.card.number = this.fg.get('number').value;
    this.card.month = this.fg.get('month').value;
    this.card.year = this.fg.get('year').value;
    this.card.code = this.fg.get('code').value;

    this.cardService.getCardList().subscribe(cards => {
      if(cards.filter(card => (card.userId === this.card.userId && card.number === this.card.number)).length > 0)
        this.errorMsg = 'You have alreday added this card!'
      else
        this.cardService.editCard(this.card).subscribe(card => this.router.navigate(['card-details']));
    });
  }
}
