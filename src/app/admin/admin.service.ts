import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { DriverDetails } from '../driver/driverdetails';



@Injectable()
export class AdminService {

    baseUrl = "http://localhost:8084";
    baseUrl1 = "http://localhost:8011";

    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

    constructor(private http: HttpClient) { }

    loginOfAdmin(email: string, password: string) {

        return this.http.get<Admin>(this.baseUrl1 + "/login/" + email + "/" + password, {headers: this.headers});
    }
    
    getDetailsOfDriverService(): Observable<DriverDetails>{
        return this.http.get<DriverDetails>(this.baseUrl+"/okdriver");

    }
}