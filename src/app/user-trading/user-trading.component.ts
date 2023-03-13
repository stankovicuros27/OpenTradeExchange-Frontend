import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';
import { TradingService } from '../trading.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-trading',
  templateUrl: './user-trading.component.html',
  styleUrls: ['./user-trading.component.css']
})
export class UserTradingComponent {

  constructor(private router: Router, private usersService: UsersService, private tradingService: TradingService) {}

  user: User
  allOrderBooks: string[]
  allOrders: Order[]

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user == null || this.user.userType < 1) {
      alert('You have no acces to this page!\nYou have been logged out.')
      localStorage.removeItem('user')
      this.router.navigate(['/home']);
    }
    this.initOrderBooks()
    this.initOrders()
  }

  initOrderBooks() {
    this.tradingService.getAllOrderBooks(this.user.userID, this.user.password).subscribe((orderBooks: string[]) => {
      this.allOrderBooks = orderBooks
    })
  }

  initOrders() {
    this.tradingService.getAllOrders(this.user.userID, this.user.password).subscribe(
      (orders: Order[]) => {
        this.allOrders = orders
      }
    )
  }

  placeOrder(bookID, price, side, volume) {
    let externalTimestamp = Math.floor(Date.now() / 1000)
    this.tradingService.placeOrder(
      this.user.userID,
      this.user.password,
      bookID,
      price,
      side,
      volume,
      externalTimestamp
    ).subscribe(resp => {
      // refresh orders
    })
  }

  cancelOrder(bookID, orderID) {
    let externalTimestamp = Math.floor(Date.now() / 1000)
  }

}
