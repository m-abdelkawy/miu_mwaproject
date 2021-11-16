import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  users: Array<any> = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res.data;
      }, err => { },
      () => { }
    )
  }

  follow(id: any) {
    this.userService.follow(id).subscribe(
      res => { }
    )
    this.userService.userData.following.push(id);
  }

  unfollow(id: any) {
    this.userService.unfollow(id).subscribe(
      res => { }
    )
    this.userService.userData.following = this.userService.userData.following.filter((_id: any) => _id != id);
  }

  // getUserById(id: any){
  //   console.log('aaaaaaaaa');
  //   this.userService.getUserById(id).subscribe(res=>console.log(res));
  // }

}
