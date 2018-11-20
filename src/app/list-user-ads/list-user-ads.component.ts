import { Component, OnInit } from '@angular/core';
import {PostadvertService} from '../services/postadvert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user-ads',
  templateUrl: './list-user-ads.component.html',
  styleUrls: ['./list-user-ads.component.css']
})
export class ListUserAdsComponent implements OnInit {

  carPosts: any = [];
  userPosts: any = [];
  email: any = "";

  constructor(private ps:PostadvertService,private route:ActivatedRoute ) { 
    
  }

  ngOnInit() {
    //get all post information from mongodb via service and server and use email parameter to display only ads associated with email
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
      this.route.params.subscribe(params=>this.getUserAds(params['email']));//get email parameter from route
  });
  }

  
  //delete ad by id using service and refresh page
  onDelete(id: string){
    console.log("Deleting item " + id)
    this.ps.deletePost(id).subscribe(()=>{
     window.location.reload();
    });
  } 

  //use route parameter to add advertisements belonging to same email to new array
  getUserAds(email: string){
    this.email = email;
    var userArrayVal=0;

    //loop through carposts array
    for(var i = 0; i<this.carPosts.length; i++){
      //if emails match, add item to array at specified position
      if(this.carPosts[i].email == this.email){
        this.userPosts[userArrayVal] = this.carPosts[i];
        userArrayVal++;
      }
    }
  }
}
