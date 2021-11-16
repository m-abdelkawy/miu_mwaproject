import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isLoggedIn: boolean = false;
  public userData: any;

  apiUrl: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  logout():Observable<any>{
    return this.http.post(`${this.apiUrl}/logout`, null); 
  }

  getUserProfile():Observable<any>{
    return this.http.get(`${this.apiUrl}/profile`);
  }

  getUserById(id: any):Observable<any>{
    return this.http.get(`${this.apiUrl}//users/${id}`);
  }

  getHomeTweets():Observable<any>{
    return this.http.get(`${this.apiUrl}/homeTweets`);
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}/users`);
  }

  follow(id: any):Observable<any>{
    return this.http.post(`${this.apiUrl}/follow/${id}`, null);
  }

  unfollow(id: any):Observable<any>{
    return this.http.post(`${this.apiUrl}/unfollow/${id}`, null);
  }

  loadFollowrs():Observable<any>{
    return this.http.get(`${this.apiUrl}/followers`);
  }

  
  loadFollowings():Observable<any>{
    return this.http.get(`${this.apiUrl}/followings`);
  }
}
