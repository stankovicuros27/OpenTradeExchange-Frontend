import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  constructor(private router: Router, private usersService: UsersService) {}

  user: User

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user == null || this.user.userType < 1) {
      alert('You have no acces to this page!\nYou have been logged out.')
      localStorage.removeItem('user')
      this.router.navigate(['/home']);
    }

  }
  
}
