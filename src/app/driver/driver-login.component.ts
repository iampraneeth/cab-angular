import { Component, OnInit } from '@angular/core';
import {Driver} from './driver';
import { DriverService } from './driver.service';


@Component({
    //selector:"driver-login",
    templateUrl:"./driver-login.component.html"
})



export class DriverLoginComponent implements OnInit{
    driver: Driver;
    constructor(private driverService : DriverService){}
    ngOnInit(){
        this.driver = new Driver();
    }

    loginDetailsOfDriver(){
        console.log(this.driver);
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        let email = (<HTMLInputElement>document.getElementById("email")).value;

        this.driverService.loginDetailsOfDriver(email,password).subscribe((data)=>{
            alert("Login Successfull");
            console.log(data);
            if(data!=null){
                alert("done");
            }
            else{
                alert("enter correct credentials");
            }
        })
    }
}

