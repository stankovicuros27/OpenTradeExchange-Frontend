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
  selector: 'app-chart-pie',
  template: `
  <div [chart]="chart"></div>
  `
})
export class ChartPieComponent {

  constructor(private router: Router, private usersService: UsersService, private tradingService: TradingService) { }
  
  user: User
  numberOfAllUsers: number = 0
  numberOfPremiumUsers: number = 0
  numberOfRegularUsers: number = 0
  numberOfNotAcceptedUsers: number = 0

  ngOnInit(): void {
    this.initUsers()
  }

  initChart() {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        plotShadow: false
      },
      title: {
        text: 'Users',
        verticalAlign: 'middle',
        floating: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          innerSize: '99%',
          borderWidth: 10,
          borderColor: '',
          slicedOffset: 10,
          dataLabels: {
            connectorWidth: 0
          }
        }
      },
      series: [
        {
          name: 'users',
          type: 'pie',
          data: [
            {name: "Not accepted", y:this.numberOfNotAcceptedUsers, color: 'red'},
            {name: "Regular", y:this.numberOfRegularUsers, color: 'blue'},
            {name: "Premium", y:this.numberOfPremiumUsers, color: 'green'},
          ]
        }
      ]
    });
  }

  initUsers() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.usersService.getAllUsers(this.user.userID, this.user.password).subscribe((users : User[]) => {
      this.numberOfAllUsers = users.length
      for (let i = 0; i < users.length; i++) {
        if (users[i].userType == 1) {
          this.numberOfRegularUsers++;
        } else if (users[i].userType == 2) {
          this.numberOfPremiumUsers++;
        } else if (users[i].userType < 1) {
          this.numberOfNotAcceptedUsers++;
        }
      }
      this.initChart()
    })
  }

  chart: Chart

}
