import { Component, OnInit } from '@angular/core';
import {PostadvertService} from '../services/postadvert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  carPosts: any = [];
  emailFound = false;
  pwFound = false;
  incorrectLogin: string ="";


  constructor(private ps:PostadvertService, private router: Router) { }

  ngOnInit() {
    //recieve car posts data from mongodb and save to this.carPosts
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
    });
  }
  // used to verify if email exists in database and email matches correlating password
  verifyUser(email:string, pw:string) {
    for(var i = 0; i<this.carPosts.length; i++){
      //if email found in carposts, set emailFound = true
      if(this.carPosts[i].email == email){
        this.emailFound= true;
      }
      //if password found in carposts, set pwFound = true
      if(this.carPosts[i].password == pw){
        this.pwFound= true;  
      }
      //if both true then continue to list-users-ad component
      if(this.emailFound == true && this.pwFound == true){
        this.router.navigate(['/userAds', this.carPosts[i].email]);
      }
      else{
        this.incorrectLogin = "email or password is not valid";
      }
    }
  }

}
