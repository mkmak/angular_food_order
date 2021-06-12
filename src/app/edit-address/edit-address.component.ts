import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  fg: any;
  errorMsg = '';
  address: any;

  constructor(private fb: FormBuilder, 
      private router: Router, 
      private addressService: AddressService,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.addressService.getAddressList().subscribe(addresses => {
      this.address = addresses.filter(address => address.id.toString() === id)[0];
      this.fg = this.fb.group({
        name: [this.address.name, Validators.required],
        address: [this.address.address, Validators.required]
      });
    });
  }

  editAddress() {
    this.address.name = this.fg.get('name').value;
    this.address.address = this.fg.get('address').value;
    this.addressService.getAddressList().subscribe(addresses => {
      if(addresses.filter(address => 
        (address.userId === this.address.userId && address.address === this.address.address)).length > 0)
        this.errorMsg = 'You have already added this address!';
      else
      this.addressService.editAddress(this.address).subscribe(address => 
        this.router.navigate(['address-list']));
    });
  }
}
