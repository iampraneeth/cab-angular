import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverHomeComponent } from './driver-home.component';
import { DriverWelcomeComponent } from './driver-welcome.component';
import { RouterModule } from '@angular/router';
import { DriverRoutes } from './driver.router';
import { HttpClientModule } from '@angular/common/http';
import { DriverService } from './driver.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent

    ],
    imports:[
        FormsModule,
        BrowserModule,
        RouterModule.forChild(DriverRoutes),
        HttpClientModule
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        RouterModule
        
    ],
    providers:[
        DriverService
    ]
})

export class DriverModule{

}