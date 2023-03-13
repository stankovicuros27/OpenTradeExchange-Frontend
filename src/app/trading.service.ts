import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  constructor(private http: HttpClient) { }

  getAllOrders(userID, password) {
    const data = {
      userID: userID,
      password: password
    }
    return this.http.post('http://localhost:8080/getAllOrders', data)
  }

  getAllOrderBooks(userID, password) {
    const data = {
      userID: userID,
      password: password
    }
    return this.http.post('http://localhost:8080/getAllOrderBooks', data)
  }

  getL1Data(userID, password, bookID) {
    const data = {
      userID: userID,
      password: password,
      bookID: bookID
    }
    return this.http.post('http://localhost:8080/getL1Data', data)
  }

  placeOrder(userID, password, bookID, price, side, volume, externalTimestamp) {
    const data = {
      userID: userID,
      password: password,
      bookID: bookID,
      price: price,
      side: side,
      volume: volume,
      externalTimestamp
    }
    return this.http.post('http://localhost:8080/placeOrder', data)
  }

}
