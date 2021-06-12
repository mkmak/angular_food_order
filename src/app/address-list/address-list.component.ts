import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../interfaces/address';
import { AddressService } from '../services/address.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList: any;

  constructor(private router: Router, private addressService: AddressService, private userService: UserService) { }

  ngOnInit(): void {
    this.addressService.getAddressList().subscribe(addresses => {
      let currUserId = this.userService.currUser.getValue().id;
      this.addressList = addresses.filter((address: Address) => address.userId === currUserId);
    });
  }

  toAddAddress() {
    this.router.navigate(['add-address']);
  }

  toEditAddress(id: any) {
    this.router.navigate(['edit-address', id]);
  }

  deleteAddress(id: any) {
    this.addressService.deleteAddress(id).subscribe(address => this.ngOnInit());
  }
}
