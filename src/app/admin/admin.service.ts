import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';

@Injectable()
export class AdminService {

    baseUrl = "http://localhost:8084";

    headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

    constructor(private http: HttpClient) { }

    loginOfAdmin(email: string, password: string) {

        return this.http.get<Admin>(this.baseUrl + "/login/" + email + "/" + password, {headers: this.headers});
    }
}