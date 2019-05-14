import{Routes} from "@angular/router"
import { ConfirmBookingComponent } from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { SignInComponent } from './sign-in.component';
import { UserRideListComponent } from './user-ridelist.component';
import { BookRideComponent } from './book-ride.component';
import { RideNowComponent } from './ride-now.component';
import { SelectDriverComponent } from './select-driver.component';


export const userRoutes:Routes=[
    {path:"user/signUp",component:UserSignUpComponent},
    {path:"user/signIn",component:SignInComponent},
    {path:"user/confirm-booking",component:ConfirmBookingComponent},
    {path:"user/bookRide", component:BookRideComponent},
    {path:"user/rideNow", component:RideNowComponent},
    {path:"user/selectDriver", component:SelectDriverComponent},
    {path:"user/confirmBooking", component:ConfirmBookingComponent}
];