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
      return this.http.get("http://localhost:8081/createAd");
    }

  private posts: Car[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(make: string, model: string, year: number, price: number, colour: string, fuel: string, description: string): Observable<any> {
    const post: Car = {make: make, model: model, year: year, price: price, colour: colour, fuel: fuel, description: description};
    return this.http.post("http://localhost:8081/createAd",post);
  }
}
