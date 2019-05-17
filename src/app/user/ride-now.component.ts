import { Component, OnInit } from "@angular/core";
import { Distance } from './distance';
import { BookRideComponent } from './book-ride.component';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { DriverDetails } from '../driver/driverdetails';
import { User } from './user';



@Component({
    //selector:"ride-now",
    templateUrl: "./ride-Now.component.html"
})
export class RideNowComponent implements OnInit {

    drivers: DriverDetails;

    constructor(private userService: UserService, private router: Router) { }

    distance: Distance;
    booking: BookRideComponent;
    user: User;

    ngOnInit() {

        this.distance = this.router.getNavigatedData();

        this.drivers = new DriverDetails();
        this.user = JSON.parse(sessionStorage.getItem('user'));

        if (this.user == null) {

            alert("please log in to access");

            this.router.navigate(["/user/signIn"])

        }

    }
    fetchDistance() {
        alert("called");
        //this.distance.finalDistance = BookRideComponent.prototype.getDistance();
        console.log(this.distance.finalDistance)
        console.log(this.distance.finalDistance)

    }

    getDetailsOfDriver() {

        this.userService.getDetailsOfDriverService().subscribe((data) => {

            console.log(data)

            if (data != null) {

                this.drivers =
                    data;

                this.router.navigate(["/user/selectDriver"]);

            }


        });
    }

    logOut() {

        sessionStorage.removeItem("user");

        this.router.navigate(["/user/signIn"]);

    }
}