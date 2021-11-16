import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  apiUrl: string = 'http://localhost:3000/tweet';

  constructor(private http: HttpClient) { }

  addTweet(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, data);
  }

  
}
