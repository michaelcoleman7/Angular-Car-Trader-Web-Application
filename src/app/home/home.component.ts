import { Component, OnInit } from '@angular/core';
import {PostadvertService} from '../services/postadvert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ps:PostadvertService) { }
  carPosts: any = [];

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.carPosts = data;
  });
  }

}
