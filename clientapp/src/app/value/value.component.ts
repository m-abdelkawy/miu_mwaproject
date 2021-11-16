import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers(){
    this.http.get('http://localhost:3000/user/users')
    .subscribe(res=>{
      this.users = res;
      this.users = this.users.data;
      console.log(this.users);
    })
  }
}
