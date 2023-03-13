import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { TradingService } from '../trading.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-exchange',
  templateUrl: './admin-exchange.component.html',
  styleUrls: ['./admin-exchange.component.css']
})
export class AdminExchangeComponent {
  
  constructor(private router: Router, private usersService: UsersService, private tradingService: TradingService) {}

  user: User
  allOrderBooks: string[]

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user == null || this.user.userType <= 3) {
      alert('You have no acces to this page!\nYou have been logged out.')
      localStorage.removeItem('user')
      this.router.navigate(['/home']);
    }
    this.initOrderBooks()
  }

  initOrderBooks() {
    this.tradingService.getAllOrderBooks(this.user.userID, this.user.password).subscribe((orderBooks: string[]) => {
      this.allOrderBooks = orderBooks
    })
  }
  
}
