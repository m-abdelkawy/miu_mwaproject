import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  followings: Array<any> = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.loadFollowings();
  }

  loadFollowings() {
    this.userService.loadFollowings().subscribe(
      res => this.followings = res.data
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
    this.followings = this.followings.filter(user => user._id != id);
  }

}
