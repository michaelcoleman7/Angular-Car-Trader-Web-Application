import { Component, OnInit } from '@angular/core';
import {PostadvertService} from '../services/postadvert.service';

@Component({
  selector: 'app-list-ad-details',
  templateUrl: './list-ad-details.component.html',
  styleUrls: ['./list-ad-details.component.css']
})
export class ListAdDetailsComponent implements OnInit {

  carPosts: any = [];

  constructor(private ps:PostadvertService) { }

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
  });
  }

  onDelete(id: string){
    console.log("Deleting item " + id)
    this.ps.deletePost(id).subscribe(()=>{
      this.ngOnInit();
    });
  }  

}
