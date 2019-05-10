import { NgModule }
    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BookRideComponent } from './book-Ride.component';



import { RideNowComponent } from './ride-Now.component';

import { SelectDriverComponent } from './select-driver.component';

import { ConfirmBookingComponent } from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';
import { SignInComponent } from './sign-in.component';

import { UserRideListComponent } from './user-ridelist.component';



@NgModule({

    declarations: [


        BookRideComponent,
        RideNowComponent,
        SelectDriverComponent,
        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent,
        UserRideListComponent

    ],

    imports: [

        BrowserModule,
        RouterModule.forChild(userRoutes)
    ],

    exports: [
        BookRideComponent,
        RideNowComponent,
        SelectDriverComponent,
        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent,
        RouterModule,
        UserRideListComponent
    ],
    providers: []
})

export class UserModule {

}
