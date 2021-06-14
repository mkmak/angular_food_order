import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../interfaces/Food';
import { User } from '../interfaces/User';
import { FoodService } from '../services/food.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: Food[]|undefined;
  filterFoodList: Food[]|undefined;
  selectFood = {
    id: -1,
    foodName: '',
    price: 0
  };
  filterText = '';
  user: User|undefined;

  constructor(private foodService:FoodService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.foodService.getFoodList().subscribe(foods => {
      this.foodList = foods;
      this.filterFoodList = foods;
    });
    this.user = this.userService.currUser.getValue()!;
  }

  setSelectFood(food: Food) {
    this.selectFood = food;
  }

  filter() {
    this.filterFoodList = this.foodList!.filter(food => 
      food.foodName.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  buyOrder(food: Food) {
    this.user?.cart.push(food.id);
    this.userService.editUser(this.user!).subscribe(user => {
      this.userService.currUser.next(user);
      this.router.navigate(['cart']);
    });
  }

  addToCart(food: any) {
    this.user?.cart.push(food.id);
    this.userService.editUser(this.user!).subscribe(user => {
      this.userService.currUser.next(user);
      alert(food.foodName + ' is added to cart.\n')
    });
  }
}
