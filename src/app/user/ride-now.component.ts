import { Component, OnInit } from "@angular/core";
import { Distance } from './distance';
import { BookRideComponent } from './book-ride.component';
import { UserService } from './user.service';
import { Router } from '@angular/router';



@Component({
    //selector:"ride-now",
    templateUrl: "./ride-Now.component.html"
})
export class RideNowComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) { }
   

    distance: Distance;
    booking: BookRideComponent;
    

    ngOnInit() {
       
        this.distance = new Distance();
        this.fetchDistance();
       
        //console.log(this.distance.finalDistance)

    }
    fetchDistance(){
        this.distance.finalDistance = BookRideComponent.prototype.getDistance();
        console.log(this.distance.finalDistance)
        console.log(this.distance.finalDistance)

    }


}