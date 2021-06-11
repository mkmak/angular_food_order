import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCardDetails() {
    this.router.navigate(['card-details']);
  }

  toAddressList() {
    this.router.navigate(['address-list']);
  }
}
