import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(username, password) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post('http://localhost:8080/login', data)
  }

  register(username, password, firstname, lastname, email, phone) {
    const data = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone
    }
    return this.http.post('http://localhost:8080/registerUser', data)
  }

  getAllUsers(userID, password) {
    const data = {
      userID: userID,
      password: password
    }
    return this.http.post('http://localhost:8080/getAllUsers', data)
  }

  setUserType(userID, password, userIDToSet, userType) {
    const data = {
      userID: userID,
      password: password,
      userIDToSet: userIDToSet,
      userType: userType
    }
    return this.http.post('http://localhost:8080/setUserType', data)
  }
}
