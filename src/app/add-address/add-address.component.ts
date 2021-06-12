import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../interfaces/address';
import { AddressService } from '../services/address.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  fg: any;
  errorMsg = '';

  constructor(private fb: FormBuilder, 
      private router: Router, 
      private userService: UserService, 
      private addressService: AddressService) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  addAddress() {
    if(this.fg.valid) {
      this.addressService.getAddressList().subscribe(addresses => {
        let currUserId = this.userService.currUser.getValue().id;
          if(addresses.filter((address: Address) =>
            (address.address === this.fg.get('address').value && address.userId === currUserId)).length > 0)
            this.errorMsg = 'You have already added this address!';
          else {
            this.addressService.addAddress({
              userId: currUserId,
              name: this.fg.get('name').value,
              address: this.fg.get('address').value
            }).subscribe(address => this.router.navigate(['address-list']));
          }
      });
    }
  }
}
