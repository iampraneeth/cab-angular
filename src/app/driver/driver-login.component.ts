import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';
import { DriverService } from './driver.service';
import { Router } from '@angular/router';
import { AuthenticateService } from './driver-authenticate.service';


@Component({
    //selector:"driver-login",
    templateUrl: "./driver-login.component.html"
})



export class DriverLoginComponent implements OnInit {
    invalidLogin = false;
    driver: Driver;
    constructor(private driverService: DriverService, private router: Router, private authenticateService: AuthenticateService) { }
    ngOnInit() {
        this.driver = new Driver();
    }

    loginDetailsOfDriver() {
        // console.log(this.driver);
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        let email = (<HTMLInputElement>document.getElementById("email")).value;

        this.driverService.loginDetailsOfDriver(email, password).subscribe((data) => {
            alert("Login Successfull");
            //console.log(data);
            if (data != null) {
                this.invalidLogin = this.authenticateService.authenticate(true, email);
                this.router.navigate(["/driver/welcome"]);
            }
        }, (err) => {
            alert("Invalid credentials");
            this.driver.email = "";
            this.driver.password = "";
        });
    }
}

