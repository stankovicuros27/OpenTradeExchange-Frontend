import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
  }

  message: string = ""
  username: string = ""
  password: string = ""

  login() {
    if(this.username == '') {
      this.message = 'Username can\'t be empty!';
    }
    else if(this.password == '') {
      this.message = 'Password can\'t be empty!';
    } else {
      this.message = ""
      this.usersService.login(this.username, this.password).subscribe((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          if (user.userType == 0) {
            alert("Registration request has not yet been accepted!")
          } else if (user.userType == 1) {
            alert("Welcome, user " + user.username)
            this.router.navigate(['/user-view'])
          } else if (user.userType == 2) {
            alert("Welcome, premium user " + user.username)
            this.router.navigate(['/user-view'])
          } else if (user.userType == 3) {
            alert("Welcome, moderator " + user.username)
            this.router.navigate(['/moderator-view'])
          } else if (user.userType == 4) {
            alert("Welcome, admin " + user.username)
            this.router.navigate(['/admin-view'])
          }
        }
      })
    }
  }

}
