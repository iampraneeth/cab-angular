import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BookRideComponent } from './book-ride.component';



import { RideNowComponent } from './ride-now.component';

import { SelectDriverComponent } from './select-driver.component';

import { ConfirmBookingComponent } from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';
import { SignInComponent } from './sign-in.component';
import { UserService } from './user.service';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
        HttpClientModule,
        FormsModule,
        BrowserModule,
        RouterModule.forChild(userRoutes),
        
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
    providers: [UserService]
})

export class UserModule {

}
