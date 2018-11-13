import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from '../car.model';

@Injectable({
  providedIn: 'root'
})
export class PostadvertService {
  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/getallcars");
    }

  private posts: Car[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(name: string, password:string,phone: number,
    email: string,make: string, model: string, year: number, price: number, 
     colour: string, fuel: string,photo: string): Observable<any> {
    const post: Car = {name: name, password:password,phone:phone, email: email, make: make,
       model: model, year: year, price: price, colour: colour, fuel: fuel,photo: photo};
    return this.http.post("http://localhost:8081/postcar",post);
  }

  deletePost(id: string):Observable<any>{
    return this.http.delete("http://localhost:8081/deletecar/"+id);
  }
}
