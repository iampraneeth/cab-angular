import { Component, OnInit } from "@angular/core";
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { BookRide } from './bookRide';
import { Distance } from './distance';
import { User } from './user';


@Component({

    //selector: "book-Ride",

    templateUrl: "./book-ride.component.html"

})

export class BookRideComponent implements OnInit {
    bookRide: BookRide;
    distance: Distance;
    user: User;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.bookRide = new BookRide();
        this.distance = new Distance();
        this.user = JSON.parse(sessionStorage.getItem('user'));
        console.log(this.user);

        if (this.user == null) {

            alert("please log in to access");

            this.router.navigate(["/user/signIn"])

        }
        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(position => {
            
            // this.location = position.coords;
            
            console.log(position.coords); 
            
             });
            
             }

    }

    // getDistance(){
    //     return this.distance.finalDistance;
    // }

    bookRideOfUser() {
        //alert("Registration successfull");
        console.log(this.bookRide);

        let pickUpAt = (<HTMLInputElement>document.getElementById("pickUpAt")).value;
        let dropAt = (<HTMLInputElement>document.getElementById("dropAt")).value;

        this.userService.bookRideOfUser(pickUpAt, dropAt).subscribe((data) => {
            console.log("success");
            //console.log(data);


            if (data != null) {
                //alert("Done");
                this.distance = data;
                console.log(this.distance.finalDistance);
                alert("The Fare is " + this.distance.finalDistance + " Rupees");
                this.router.navigate(['/user/rideNow']);

            }
        });

    }

    logOut() {

        sessionStorage.removeItem("user");

        this.router.navigate(["/user/signIn"]);

    }

}

