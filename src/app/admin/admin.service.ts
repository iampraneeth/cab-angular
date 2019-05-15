import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { Driver } from '../driver/driver';

@Injectable()
export class AdminService {

    baseUrl = "http://localhost:8084";
    baseUrl1 = "http://localhost:8011";

    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

    constructor(private http: HttpClient) { }

    loginOfAdmin(email: string, password: string) {

        return this.http.get<Admin>(this.baseUrl1 + "/login/" + email + "/" + password, {headers: this.headers});
    }
    getDetailsOfDriverService(){
        return this.http.get<Driver>(this.baseUrl+"/okdriver");

    }
}