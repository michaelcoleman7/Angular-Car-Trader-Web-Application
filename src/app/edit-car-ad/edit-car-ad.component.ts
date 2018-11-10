import { Component, OnInit } from '@angular/core';
import {PostadvertService} from '../services/postadvert.service';

@Component({
  selector: 'app-edit-car-ad',
  templateUrl: './edit-car-ad.component.html',
  styleUrls: ['./edit-car-ad.component.css']
})
export class EditCarAdComponent implements OnInit {

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
