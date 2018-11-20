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
    //get all post data from mongodb via service and and save to this.carPosts to display ads
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
  });
  }

}
