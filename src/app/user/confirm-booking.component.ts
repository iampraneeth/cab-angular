import { Component, OnInit }
    from '@angular/core';
import { Driver } from '../driver/driver';
import { UserService } from './user.service';
import { DriverService } from '../driver/driver.service';
import { Router } from '@angular/router';



@Component({

    selector: "confirm-booking",

    templateUrl: "./confirm-booking.component.html"

})

export class ConfirmBookingComponent  implements OnInit{
    
    driver:Driver;
    constructor( private driverService:DriverService, private router:Router){}

    ngOnInit(){
        this.driver= new Driver();
    }

  getDriverDetailsForUser(){
      this.driverService.getDriverDetailsForUsers().subscribe((data)=>{
          if(data!=null)
          {
             this.router.navigate(['/user/selectDriver']); 
          }
      });
      
  }
  driverAccept(){
    this.driverService.driverAccept().subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/user/selectDriver']); 
    });
}

}

