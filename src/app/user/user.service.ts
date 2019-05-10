import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()


    


export class UserService{
    baseUrl:"";
    constructor(private http:HttpClient){}

    getUserRidesDetails(category:string):Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl +"users/");
     }
}