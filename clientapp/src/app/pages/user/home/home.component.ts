import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweets: Array<any> = [];



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadTweets();
  }

  loadTweets() {
    this.userService.getHomeTweets().subscribe(
      res => {
        console.log(res);
        this.tweets = res.data;
      }, err => console.log(err),
      () => { }
    )
  }

  addTweet(e: any) {
    this.tweets.unshift(e)
  }
}
