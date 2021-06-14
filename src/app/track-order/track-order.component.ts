import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/Order';
import { User } from '../interfaces/User';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  orders: any;
  currentOrder: any;
  user: User|undefined;

  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {
    this.orderService.getOrderList().subscribe(orders => {
      this.user = this.userService.currUser.getValue()!;
      this.orders = orders.filter(order => order.userId === this.user!.id);
      this.currentOrder = this.orders.filter((order: any) => order.status != 'Delivered')[0];
      this.startTimer()
    })
  }

  startTimer() {
    if(this.currentOrder && this.currentOrder.timeLeft == 20) {
      console.log(this.currentOrder)
      let intervalId = setInterval(() => {
        if(this.currentOrder.timeLeft - 1 == -1) {
          clearInterval(intervalId);
        }
        else {
          this.currentOrder.timeLeft -= 1;
          if(this.currentOrder.timeLeft <= 0)
            this.currentOrder.status = 'Delivered';
          else if(this.currentOrder.timeLeft <= 10)
            this.currentOrder.status = 'Picked Up';
          this.orderService.editOrder(this.currentOrder).subscribe(order => console.log(order));
        }
      }, 1000);
    }
  }

  cancelOrder(order: Order) {
    if(order.status == 'Delivered')
      alert('You cannot cancel a delivered order!');
    else {
      this.orderService.deleteOrder(order.id).subscribe(order => {
        this.ngOnInit();
      });
    }
  }
}
