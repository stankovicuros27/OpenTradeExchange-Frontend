import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private usersService: UsersService) { }

  logout(): void {
    alert('You have been logged out.')
    localStorage.removeItem('user')
    this.router.navigate(['/home']);
  }

}
