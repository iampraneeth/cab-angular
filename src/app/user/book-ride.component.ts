import { Component, OnInit } from "@angular/core";
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { BookRide } from './bookRide';
import { Distance } from './distance';

@Component({

    selector: "book-Ride",

    templateUrl: "./book-ride.component.html"

})

export class BookRideComponent implements OnInit {
    bookRide: BookRide;
    distance: Distance;
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.bookRide = new BookRide();
        this.distance = new Distance();
    }

    getDistance(){
        return this.distance.finalDistance;
    }

    bookRideOfUser() {
        alert("Registration successfull");
        console.log(this.bookRide);

        let pickUpAt = (<HTMLInputElement>document.getElementById("pickUpAt")).value;
        let dropAt = (<HTMLInputElement>document.getElementById("dropAt")).value;
        
        this.userService.bookRideOfUser(pickUpAt,dropAt).subscribe((data) => {
            console.log("success");
            console.log(data);
            
            if (data != null) {
                alert("Done");
                this.distance=data;
                console.log(this.distance.finalDistance)
                this.router.navigate(['/user/rideNow']);
            }
        });



    }

}

