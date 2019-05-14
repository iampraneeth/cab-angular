import { Routes } from '@angular/router';
import { DriverHomeComponent } from './driver-home.component';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverWelcomeComponent } from './driver-welcome.component';
import { DriverNotificationComponent } from './driver-notification.component';
import { DriverReviewsComponent } from './driver-reviews.component';
import { DriverRidesComponent } from './driver-rides.component';



export const DriverRoutes: Routes = [
    { path: "driver/home", component: DriverHomeComponent },
    { path: "driver/login", component: DriverLoginComponent },
    { path: "driver/registration", component: DriverRegistrationComponent },
    { path: "driver/notification", component: DriverNotificationComponent },
    { path: "driver/reviews", component: DriverReviewsComponent },
    { path: "driver/rides", component: DriverRidesComponent },
    { path: "driver/welcome", component: DriverWelcomeComponent }

]

