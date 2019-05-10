import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login.component';
import { AdminHome } from './admin-home.component';
import { DriverManagementComponent } from './admin-driver-management.component';



export const AdminRoutes: Routes=[

    {path:"admin/home",component:AdminHome},
    {path:"admin/login", component:AdminLoginComponent},
    {path:"admin/driverManagement",component:DriverManagementComponent}

]