import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BookRide } from './bookRide';
import { Distance } from './distance';
import { DriverDetails } from '../driver/driverdetails';

@Injectable()
export class UserService {
  baseUrl = "http://localhost:8011";
  baseUrl1 = "http://localhost:8021";

  // private baseUrl = '/api';
  headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
  constructor(private http: HttpClient) {

  }
  signUpDetailsOfUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.baseUrl + "/signUp", user, { headers: this.headers });
  }

  signInDetailsOfUser(email: string, password: string) {

    return this.http.get<User>(this.baseUrl + "/loginuser/" + email + "/" + password);
  }
  bookRideOfUser(pickUpAt: string, dropAt: string) {
    return this.http.get<Distance>(this.baseUrl + "/bookride/" + pickUpAt + "/" + dropAt);
  }

  ridwNowDistance() {
    return this.http.get<Distance>(this.baseUrl + "/getdistance");
  }
  
  getDetailsOfUser(): Observable<User>{
    return this.http.get<User>(this.baseUrl+"/givinguserdetails");
}
getDetailsOfDriverService(): Observable<DriverDetails> {

  return this.http.get<DriverDetails>(this.baseUrl1 + "/userdetailsfordriver1");

}
completeRide(){
  return this.http.get<User>(this.baseUrl1+"/ridecomplete")
}
}