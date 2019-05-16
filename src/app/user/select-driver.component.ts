import { Component, OnInit } from '@angular/core';
import { DriverDetails } from '../driver/driverdetails';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
    //selector: "select-driver",
    templateUrl: "./select-driver.component.html"

})



export class SelectDriverComponent implements OnInit {

    drivers: DriverDetails;

    constructor(private userService: UserService, private router: Router) {

    }

    ngOnInit() {

        this.userService.getDetailsOfDriverService().subscribe((data) => {

            console.log(data)

            if (data != null) {

                this.drivers = data;

                this.router.navigate(["/user/selectDriver"]);

            }

        });

    }
    completeRide(){
        this.userService.completeRide().subscribe(()=>{
            this.router.navigate(["/user/bookRide"]);
        });
    }

}