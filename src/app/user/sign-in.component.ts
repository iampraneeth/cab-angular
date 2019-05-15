import { Router } from '@angular/router';
import { Component } from '@angular/core'
import { User } from './user';
import { UserService } from './user.service';
import { AuthenticateService } from './user-authenticate.service';


@Component({
 templateUrl:"./sign-in.component.html",
 styleUrls:["./sign-in.component.css"]
})
export class SignInComponent{
    user: User;
    invalidLogin = false;
    constructor(private userService: UserService, private router:Router,  private authenticateService: AuthenticateService) {
          
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
                this.invalidLogin = this.authenticateService.authenticate(true,email);
                alert('logging in');
                if(data.email=="admin@gmail.com" && data.password=="Admin@123"){
                    this.router.navigate(['/admin/home']);
                }
                else{
                    if(data != null){
                        this.invalidLogin = this.authenticateService.authenticate(true,email);
                        this.router.navigate(['/user/bookRide']);
                    }else
                        this.invalidLogin = true;
                }
                
              
  
            }
        }, (err) => {
            alert("Invalid credentials");
            this.user.email = "";
            this.user.password = "";
        });
      

    }

}