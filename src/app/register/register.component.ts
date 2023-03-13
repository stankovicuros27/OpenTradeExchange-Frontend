import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
  }

  message: string = ""
  username: string = ""
  password: string = ""
  firstname: string = ""
  lastname: string = ""
  email: string = ""
  phone: string = ""

  register() {
    if(this.username == '') {
      this.message = 'Username can\'t be empty!';
    }
    else if(this.password == '') {
      this.message = 'Password can\'t be empty!';
    } else {
      this.message = ""
      this.usersService.register(this.username, this.password, this.firstname, this.lastname, this.email, this.phone).subscribe(data => {
        alert("Registration request sent")
      })
    }
  }

}
