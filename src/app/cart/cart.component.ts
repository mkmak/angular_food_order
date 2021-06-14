import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../interfaces/Food';
import { User } from '../interfaces/User';
import { FoodService } from '../services/food.service';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Food[] = [];
  total = 0;
  user: User|undefined;

  constructor(private userService: UserService, 
    private router: Router, 
    private foodService: FoodService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.user = this.userService.currUser.getValue()!;
    let foodIds = this.user.cart;
    foodIds?.forEach((value: any) => {
      this.foodService.getFoodList().subscribe(foods => {
        let food = foods.filter(food => food.id === value)[0];
        this.total += food.price;
        this.cart.push(food);
      });
    });
  }

  toFoodList() {
    this.router.navigate(['food-list']);
  }

  placeOrder() {
    this.orderService.getOrderList().subscribe(orders => {
      if(orders.filter(order => (order.userId == this.user?.id && order.status != 'Delivered')).length > 0)
        alert("You already have one order in progress!");
      else {
        if(this.cart.length > 0) {
          this.orderService.addOrder({
            userId: this.user?.id!,
            foods: this.cart,
            total: this.total,
            status: 'Placed',
            timeLeft: 20
          }).subscribe(order => {
            this.user?.cart.splice(0, this.user.cart.length);
            this.userService.editUser(this.user!).subscribe(user => {
              this.userService.currUser.next(user);
              this.router.navigate(['track-order']);
            });
          });
        }
        else
          alert("Your cart is empty!");
      }
    });
  }
}
