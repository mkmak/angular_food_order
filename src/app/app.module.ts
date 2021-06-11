import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingComponent } from './setting/setting.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ProfileComponent } from './profile/profile.component';
import { FoodListComponent } from './food-list/food-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddCardComponent } from './add-card/add-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CartComponent,
    SettingComponent,
    TrackOrderComponent,
    ProfileComponent,
    FoodListComponent,
    CardDetailsComponent,
    AddressListComponent,
    AddAddressComponent,
    EditAddressComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
