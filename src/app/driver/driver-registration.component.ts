import { Component, OnInit } from '@angular/core';
import{Driver} from './driver';
import {DriverService} from './driver.service';
import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

enableProdMode();

@Component({
    templateUrl:"./driver-registration.component.html"
    //selector:"driver-registration"
})

export class DriverRegistrationComponent implements OnInit{

    driver:Driver;
    constructor(private driverService: DriverService, private router: Router){}
    ngOnInit(){
        this.driver=new Driver();
    }

    registrationForDriver(){
        console.log(this.driver);
        this.driverService.registrationForDriver(this.driver).subscribe((data)=>{
            console.log("success");
            console.log(data);
            if(data!=null){
                alert("Registration successful");
                this.router.navigate(["/driver/login"]);
            }
        })
    }


}