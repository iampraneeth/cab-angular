import { Component } from '@angular/core';
import { Admin } from './admin';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:"./admin-login.component.html"
})
export class AdminLoginComponent{

    admin: Admin;

    constructor(private adminService : AdminService, private router: Router){}
    
    ngOnInit(){
        this.admin = new Admin();    
    }

    loginOfAdmin(){
       // console.log(this.admin);
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        
        this.adminService.loginOfAdmin(email,password).subscribe((data) => {
            alert("Login Successful");
            //console.log(data);
            // if (data != null) {
                alert("done");
                this.router.navigate(['/admin/driverManagement']);
            // }
            
            
        });
    }
}