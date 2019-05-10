import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.router';
import { AdminHome } from './admin-home.component';
import { DriverManagementComponent } from './admin-driver-management.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';



@NgModule({
    declarations: [
        AdminLoginComponent,
        AdminHome,
        DriverManagementComponent
    ],

    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        RouterModule.forChild(AdminRoutes)
    ],

    exports: [
        AdminLoginComponent,
        RouterModule,
        AdminHome,
        DriverManagementComponent
    ],

    providers: [
        AdminService
    ]

})

export class AdminModule {

}