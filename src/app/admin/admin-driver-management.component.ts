import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver/driver';
import { AdminService } from './admin.service';
import { ActivatedRoute } from '@angular/router';



@Component({
    templateUrl:"./admin-driver-management.component.html"
})
export class DriverManagementComponent implements OnInit{
    drivers:Driver[];

    constructor(private adminService: AdminService, private route: ActivatedRoute){}

    ngOnInit():void{
     this.drivers = new Driver();
     this.adminService.getDetailsOfDriverService().subscribe((data)=>{
        this.drivers = data;
         console.log(data) 
    })
} 
}
