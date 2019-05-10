import { Routes } from '@angular/router';
import { DriverHomeComponent } from './driver-home.component';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverWelcomeComponent } from './driver-welcome.component';



export const DriverRoutes:Routes = [
    {path:"driver/home",component:DriverHomeComponent},
    {path:"driver/login",component:DriverLoginComponent},
    {path:"driver/registration",component:DriverRegistrationComponent},
    {path:"driver/welcome",component:DriverWelcomeComponent}
]

