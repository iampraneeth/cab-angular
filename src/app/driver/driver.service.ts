import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Driver} from './driver';
import { Observable } from 'rxjs';
import { User } from '../user/user';


@Injectable()
export class DriverService {

    baseUrl = "http://localhost:8011";
    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

    constructor(private http: HttpClient) {
    }
    registrationForDriver(driver: Driver): Observable<Driver> {
        console.log(driver);
        return this.http.post<Driver>(this.baseUrl + "/registration", driver,{headers: this.headers});
    }

    loginDetailsOfDriver(email: string, password: string) {

        return this.http.get<Driver>(this.baseUrl + "/login/" + email + "/" + password, {headers: this.headers});
    }
  


}