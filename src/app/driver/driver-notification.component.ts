import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { DriverService } from './driver.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    templateUrl:"./driver-notification.component.html",
    selector:"driver-notification",
    styleUrls:['./driver-welcome.component.css']
})
export class DriverNotificationComponent implements OnInit{
    user:User;
    // bookRide:BookRide;

    constructor(private driverService:DriverService,private route: ActivatedRoute,private router:Router){}

    ngOnInit(){
        this.driverService.getDetailsOfUser().subscribe((data)=>{
            this.user=data;
            console.log(data);
        })
    }
    driverAccept(){
        this.driverService.driverAccept().subscribe((data)=>{
                if(data!=null){
                    alert("Your ride is started")
                    this.router.navigate(["/driver/welcome"]);

                }
        });
    }
    driverReject(){
        alert("you cancelled the ride")
        this.router.navigate(["/driver/home"]);

    }

}