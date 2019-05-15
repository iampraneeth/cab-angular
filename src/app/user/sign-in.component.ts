import { Router } from '@angular/router';
import { Component } from '@angular/core'
import { User } from './user';
import { UserService } from './user.service';


@Component({
 templateUrl:"./sign-in.component.html",
 styleUrls:["./sign-in.component.css"]
})
export class SignInComponent{
    user: User;
    constructor(private userService: UserService, private router:Router) {
          
     }
    ngOnInit() {
        this.user = new User();
    }

    signInDetailsOfUser() {
       // alert("method");
       // console.log(this.user);
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        
        this.userService.signInDetailsOfUser(email,password).subscribe((data) => {
            console.log(this.user.email);
            alert("Login Successful");
            //console.log(data);
            
            if (data != null) {
                if(data.email=="admin@gmail.com" && data.password=="Admin@123"){
                    this.router.navigate(['/admin/home']);
                }
                else{
                    this.router.navigate(['/user/bookRide']);
                }
                // alert("done");
              
  
            }
        }, (err) => {
            alert("Invalid credentials");
            this.user.email = "";
            this.user.password = "";
        });
      

    }

}