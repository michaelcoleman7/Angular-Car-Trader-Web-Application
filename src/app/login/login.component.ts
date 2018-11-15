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


  constructor(private ps:PostadvertService, private router: Router) { }

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
    });
  }

  verifyUser(email:string, pw:string) {
    for(var i = 0; i<this.carPosts.length; i++){
      if(this.carPosts[i].email == email){
        this.emailFound= true;
      }
      if(this.carPosts[i].password == pw){
        this.pwFound= true;  
      }
      if(this.emailFound == true && this.pwFound == true){
        this.router.navigate(['/userAds', this.carPosts[i].email]);
      }
    }
  }

}
