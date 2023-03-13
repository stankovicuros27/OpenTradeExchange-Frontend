// chart.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import { interval } from 'rxjs';
import { L1Data } from '../models/L1Data';
import { User } from '../models/user';
import { TradingService } from '../trading.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chart',
  template: `
    <div [chart]="chart"></div>
  `
})

export class ChartComponent {

  constructor(private router: Router, private usersService: UsersService, private tradingService: TradingService) { }

  @Input() orderBook: string

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.update()
    interval(1000).subscribe(val => this.update())
  }

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Price'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type: 'line',
        data: []
      }
    ]
  });

  l1Data: L1Data
  user: User

  update() {
    this.tradingService.getL1Data(this.user.userID, this.user.password, this.orderBook).subscribe((l1d: L1Data) => {
      this.add(l1d.lastTradePrice)
    })
  }

  // add point to chart serie
  add(trade) {
    this.chart.addPoint(trade);
  }
}