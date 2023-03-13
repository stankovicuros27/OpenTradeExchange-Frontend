import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent {

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  oldPassword: string
  newPassword: string
  newPasswordConfirmation: string

  showChangePassword: boolean = false

  @Input() user: User

  logout() {
    sessionStorage.clear()
    localStorage.removeItem('user')
    this.router.navigate(['/home']);
  }

  setShowChangePassword() {
    this.showChangePassword = !this.showChangePassword
  }

  changePassword() {
    if (this.oldPassword != this.user.password) {
      alert("Old password is not correct!")
      return
    }
    if (this.newPassword != this.newPasswordConfirmation) {
      alert("Passwords are not the same!")
      return
    }

    /*this.usersService.changeUserPassword(this.user.username, this.newPassword).subscribe(response => {
      if (response["message"] == 'OK') {
        alert("Password changed. You are logged out!")
        this.logout()
      }
    })*/
    this.logout()
  }

}
