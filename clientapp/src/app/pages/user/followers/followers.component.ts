import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: Array<any> = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.loadFollowers();
  }

  loadFollowers() {
    this.userService.loadFollowrs().subscribe(
      res => this.followers = res.data
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
}
