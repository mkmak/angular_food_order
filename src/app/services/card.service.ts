import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) { }

  getCardList() {
    return this.http.get<[Card]>(this.baseUrl);
  }

  addCard(card: any) {
    return this.http.post<Card>(this.baseUrl, card);
  }

  editCard(card: any) {
    return this.http.put<Card>(this.baseUrl + '/' + card.id, card);
  }

  deleteCard(id: any) {
    return this.http.delete<Card>(this.baseUrl + '/' + id);
  }
}
