import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodList: any;
  filterFoodList: any;
  selectFood = {
    id: -1,
    restaurantName: '',
    restaurantType: '',
    restaurantRating: -1.0,
    price: -1.0,
    foodName: '',
    foodImage: ''
  };
  filterText = '';

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foodService.getFoodList().subscribe(foods => {
      this.foodList = foods;
      this.filterFoodList = foods;
    });
  }

  setSelectFood(food: any) {
    this.selectFood = food;
  }

  filter() {
    this.filterFoodList = this.foodList.filter((food: any) => 
      food.foodName.toLowerCase().includes(this.filterText.toLowerCase()));
  }
}
