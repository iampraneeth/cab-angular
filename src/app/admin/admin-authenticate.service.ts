import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';




@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {

    constructor(private adminservice: AdminService) { }

    authenticate(flag, email) {

        if (flag) {
            sessionStorage.setItem('email', email)
            return false;
        }
        else {
            return true;
        }
    }

    isUserLoggedIn() {
        alert("seesion call");
        let user = sessionStorage.getItem('email')
        console.log(!(user === null))
        console.log(sessionStorage.getItem('email'))
        return (!user === null)
    }
    logOut() {
        sessionStorage.removeItem('email')
        alert("logout")
    }


}