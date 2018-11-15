import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {PostadvertService} from '../services/postadvert.service';


@Component({
  selector: 'app-edit-car-ad',
  templateUrl: './edit-car-ad.component.html',
  styleUrls: ['./edit-car-ad.component.css']
})
export class EditCarAdComponent implements OnInit {
  carPost: any = [];
  photoBinaryString:string="";
  // adapted from https://stackoverflow.com/questions/42482951/converting-an-image-to-base64-in-angular-2
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          //converts string to base 64
          this.photoBinaryString= btoa(binaryString);
  }

  constructor(private route: ActivatedRoute,private service:PostadvertService,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }

  ngOnInit() {
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>{
        this.carPost = data;
    });

  }

  onEditPost(form: NgForm){
    form.value.photo = this.photoBinaryString;
    this.service.updateCar(this.carPost._id,form.value.name, form.value.password,form.value.phone,form.value.email, form.value.make, form.value.model, form.value.year, form.value.price, 
      form.value.colour, form.value.fuel, form.value.photo).subscribe(() =>
      {
        this.router.navigate(['/listAds']);
      });
  }
}
