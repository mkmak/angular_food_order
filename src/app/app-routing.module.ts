import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddressListComponent } from './address-list/address-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CartComponent } from './cart/cart.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { FoodListComponent } from './food-list/food-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IsloginGuard } from './guards/islogin.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { TrackOrderComponent } from './track-order/track-order.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'cart', canActivate: [IsloginGuard], component: CartComponent },
  { path: 'setting', canActivate: [IsloginGuard], component: SettingComponent },
  { path: 'profile', canActivate: [IsloginGuard], component: ProfileComponent },
  { path: 'track-order', canActivate: [IsloginGuard], component: TrackOrderComponent },
  { path: 'food-list', canActivate: [IsloginGuard], component: FoodListComponent },
  { path: 'card-details', canActivate: [IsloginGuard], component: CardDetailsComponent },
  { path: 'add-card', canActivate: [IsloginGuard], component: AddCardComponent },
  { path: 'address-list', canActivate: [IsloginGuard], component: AddressListComponent },
  { path: 'add-address', canActivate: [IsloginGuard], component: AddAddressComponent },
  { path: 'edit-address/:id', canActivate: [IsloginGuard], component: EditAddressComponent },
  { path: '**', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
