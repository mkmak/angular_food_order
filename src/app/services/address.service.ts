import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl = "http://localhost:3000/addresses";

  constructor(private http: HttpClient) { }

  getAddressList() {
    return this.http.get<[Address]>(this.baseUrl);
  }

  addAddress(address: any) {
    return this.http.post<Address>(this.baseUrl, address);
  }

  editAddress(address: any) {
    return this.http.put<Address>(this.baseUrl + '/' + address.id, address);
  }

  deleteAddress(id: any) {
    return this.http.delete<Address>(this.baseUrl + "/" + id);
  }
}
