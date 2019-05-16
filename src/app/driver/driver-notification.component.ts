import { Component, OnInit } from '@angular/core';
import { DriverDetails } from './driverdetails';
import { AdminService } from '../admin/admin.service';
import { ActivatedRoute } from '@angular/router';



@Component({
    templateUrl:"./driver-notification.component.html",
    selector:"driver-notification",
    styleUrls:['./driver-welcome.component.css']
})
export class DriverNotificationComponent implements OnInit{

    drivers:DriverDetails;

    constructor(private adminService: AdminService, private route: ActivatedRoute){}

    ngOnInit(){
     this.adminService.getDetailsOfDriverService().subscribe((data)=>{
        this.drivers = data;
         console.log(data) 
    })
} 

}