import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
    templateUrl:"./user-profile.component.html"
})
export class UserProfileComponent implements OnInit{

    user:User;
    constructor(private userService:UserService, private router: Router ){}

    ngOnInit(){
        this.userService.getDetailsOfUser().subscribe((data)=>{
            this.user=data;
            console.log(data);
            this.router.navigate(["/user/profile"]);
        })
    }
}