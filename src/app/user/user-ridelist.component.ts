import { Component } from '@angular/core';


@Component({
    templateUrl:"./user-ridelist.component.html",
    selector:"user-ridelist",
})
export class UserRideListComponent{
    users = [
        {
            "userRideId": 103,
            "pickUpLocation": "Kalyan",
            "dropLocation":"Airoli",
            "rideFare":"300",
            "rideDate": new Date(2019,5,3)
        },
        {
            "userRideId": 104,
            "pickUpLocation": "Kalyan",
            "dropLocation":"Airoli",
            "rideFare":"300",
            "rideDate": new Date(2019,5,4)
        },
        {
            "userRideId": 105,
            "pickUpLocation": "Kalyan",
            "dropLocation":"Airoli",
            "rideFare":"300",
            "rideDate": new Date(2019,5,5)
        }
    ];
}