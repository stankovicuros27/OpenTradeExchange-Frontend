import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';
import { TradingService } from '../trading.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {

  constructor(private router: Router, private usersService: UsersService, private tradingService: TradingService) { }

  user: User
  allUsers: User[]
  numberOfAllUsers: number = 0
  numberOfPremiumUsers: number = 0
  numberOfRegularUsers: number = 0
  numberOfNotAcceptedUsers: number = 0

  ngOnInit(): void {
    this.initUsers();
  }

  initUsers() {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user == null || this.user.userType <= 3) {
      alert('You have no acces to this page!\nYou have been logged out.')
      localStorage.removeItem('user')
      this.router.navigate(['/home']);
    }
    this.usersService.getAllUsers(this.user.userID, this.user.password).subscribe((users : User[]) => {
      this.allUsers = users
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
    })
  }

  setUserType(userIDToSet, userType) {
    alert("Updating user " + userIDToSet)
    this.usersService.setUserType(this.user.userID, this.user.password, userIDToSet, userType).subscribe(res => this.initUsers())
  }

}
