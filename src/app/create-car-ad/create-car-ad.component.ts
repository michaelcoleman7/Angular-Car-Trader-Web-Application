import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostadvertService} from '../services/postadvert.service';


@Component({
  selector: 'app-create-car-ad',
  templateUrl: './create-car-ad.component.html',
  styleUrls: ['./create-car-ad.component.css']
})
export class CreateCarAdComponent implements OnInit {

  constructor(private service:PostadvertService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.make, form.value.model, form.value.year, form.value.price, 
      form.value.colour, form.value.fuel, form.value.description).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {

  }

}
