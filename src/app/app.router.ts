import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ResourceNotFoundComponent } from './notfound.component';
import { AboutUsComponent } from './aboutUs.component';




export const appRouter:Routes=[
{path:"home",component:WelcomeComponent},
{path:"", component:WelcomeComponent},
{path:"aboutUs",component:AboutUsComponent},
{path:"**",component:ResourceNotFoundComponent}

]