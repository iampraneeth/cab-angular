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
import { DriverReviewsComponent } from './driver-reviews.component';
import { DriverNotificationComponent } from './driver-notification.component';
import { DriverRidesComponent } from './driver-rides.component';
import { AuthenticateService } from './driver-authenticate.service';

@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverHomeComponent,
        DriverWelcomeComponent,
        DriverReviewsComponent,
        DriverNotificationComponent,
        DriverRidesComponent
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
        DriverNotificationComponent,
        DriverRidesComponent,
        DriverReviewsComponent,
        RouterModule
        
    ],
    providers:[
        DriverService,
        AuthenticateService
    ]
})

export class DriverModule{

}