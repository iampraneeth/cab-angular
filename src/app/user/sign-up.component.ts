import { Component, OnInit } from "@angular/core";
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';
@Component({
    selector: "UserSignUpComponent",
    templateUrl: "./sign-up.component.html",
})
export class UserSignUpComponent implements OnInit{
    user:User;
    constructor(private userService: UserService, private router: Router){}

    ngOnInit(){
        this.user= new User();
    }
  
    
  
    signUpDetailsOfUser(){
        alert("Registration successfull");
          console.log(this.user);
        this.userService.signUpDetailsOfUser(this.user).subscribe((data)=>{
             console.log("success");
             console.log(data);
             if(data!=null){
               // alert("Done");
                this.router.navigate(['/user/signIn']); 
             }
        });



}
}

