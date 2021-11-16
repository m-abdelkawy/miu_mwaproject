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

  getHomeTweets():Observable<any>{
    return this.http.get(`${this.apiUrl}/homeTweets`);
  }
}
