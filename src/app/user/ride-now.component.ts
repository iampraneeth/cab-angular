import { Component, OnInit } from "@angular/core";
import { Distance } from './distance';
import { BookRideComponent } from './book-ride.component';


@Component({
    //selector:"ride-now",
    templateUrl: "./ride-Now.component.html"
})
export class RideNowComponent implements OnInit {

    distance: Distance;
    booking: BookRideComponent;

    ngOnInit() {
        this.distance.finalDistance = BookRideComponent.prototype.getDistance();
        console.log(this.distance.finalDistance)

    }

}