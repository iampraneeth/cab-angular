import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { ActivatedRoute } from '@angular/router';
import { DriverDetails } from '../driver/driverdetails';





@Component({
    templateUrl:"./admin-driver-management.component.html"
})
export class DriverManagementComponent implements OnInit{
    drivers:DriverDetails;

    constructor(private adminService: AdminService, private route: ActivatedRoute){}

    ngOnInit(){
     this.adminService.getDetailsOfDriverService().subscribe((data)=>{
        this.drivers = data;
         console.log(data) 
    })
} 
}
