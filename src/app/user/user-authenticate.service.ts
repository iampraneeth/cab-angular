import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {

    constructor(private userservice: UserService) { }

    authenticate(flag, user) {

        if (flag) {
            sessionStorage.setItem('user', JSON.stringify(user))
            return false;
        }
        else {
            return true;
        }
    }

    isUserLoggedIn() {
        alert("seesion call");
        let user = sessionStorage.getItem('user')
        console.log(!(user === null))
        console.log(sessionStorage.getItem('user'))
        return (!user === null)
    }
    logOut() {
        sessionStorage.removeItem('user')
        alert("logout")
    }



}

