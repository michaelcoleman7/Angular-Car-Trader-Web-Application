import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostadvertService} from '../services/postadvert.service';


@Component({
  selector: 'app-create-car-ad',
  templateUrl: './create-car-ad.component.html',
  styleUrls: ['./create-car-ad.component.css']
})
export class CreateCarAdComponent implements OnInit {
    photoBinaryString:string="";
    //convert photo into base64
    // adapted from https://stackoverflow.com/questions/42482951/converting-an-image-to-base64-in-angular-2
    handleFileSelect(evt){
      console.log(evt);
      var files = evt.target.files;//can be found in file(evt) array returned by selecting file, can viewed in console by logging evt
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this.handleReaderLoaded.bind(this);//call below method handleReaderLoaded

        reader.readAsBinaryString(file);
    }
  }

handleReaderLoaded(readerEvt) {
  var binaryString = readerEvt.target.result;
          //btoa() converts string to base 64
          this.photoBinaryString= btoa(binaryString);
  }

  constructor(private service:PostadvertService) { }

  onAddPost(form: NgForm) {
    form.value.photo = this.photoBinaryString;
    this.service.addPost(form.value.name, form.value.password,form.value.phone,form.value.email, form.value.make, form.value.model, form.value.year, form.value.price, 
      form.value.colour, form.value.fuel, form.value.photo).subscribe();
    form.resetForm();
  }

  ngOnInit() {

  }

}
