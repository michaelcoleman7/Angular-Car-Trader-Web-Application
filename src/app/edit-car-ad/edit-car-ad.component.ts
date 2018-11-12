import { Component, OnInit } from '@angular/core';
import {PostadvertService} from '../services/postadvert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-car-ad',
  templateUrl: './edit-car-ad.component.html',
  styleUrls: ['./edit-car-ad.component.css']
})
export class EditCarAdComponent implements OnInit {

  carPosts: any = [];
  userPosts: any = [];
  email: any = "";

  constructor(private ps:PostadvertService,private route:ActivatedRoute ) { 
    
  }

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
      this.route.params.subscribe(params=>this.getUserAds(params['email']));//get email parameter from url route
  });
  }

  

  onDelete(id: string){
    console.log("Deleting item " + id)
    this.ps.deletePost(id).subscribe(()=>{
     window.location.reload()//cant use this.ngOnInit() when using parameters
    });
  } 
  //use url route parameter to add advertisements belonging to same email
  getUserAds(email: string){
    this.email = email;
    console.log(this.email);
    var userArrayVal=-1;
    for(var i = 0; i<this.carPosts.length; i++){
      if(this.carPosts[i].email == this.email){
        userArrayVal++;
        this.userPosts[userArrayVal] = this.carPosts[i];
          console.log(this.userPosts);
      }
    }
  }
}
