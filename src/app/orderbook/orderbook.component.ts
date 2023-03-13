import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { L1Data } from '../models/L1Data';
import { User } from '../models/user';
import { TradingService } from '../trading.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent {

  constructor(private router: Router, private usersService: UsersService, private tradingService: TradingService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.update()
    interval(1000).subscribe(val => this.update())
  }

  @Input() orderBook: string

  l1Data: L1Data
  user: User

  update() {
    this.tradingService.getL1Data(this.user.userID, this.user.password, this.orderBook).subscribe((l1d: L1Data) => {
      this.l1Data = l1d
    })
  }
}
