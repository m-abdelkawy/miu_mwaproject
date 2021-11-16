import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TweetService } from 'src/app/providers/services/tweet.service';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-addtweet',
  templateUrl: './addtweet.component.html',
  styleUrls: ['./addtweet.component.css']
})
export class AddtweetComponent implements OnInit {

  @Output()
  tweetEmitter = new EventEmitter<any>();

  tweetForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.maxLength(140)])
  })

  constructor(private tweetService: TweetService, private userService: UserService) { }

  ngOnInit(): void {
  }

  addTweet() {
    if (this.tweetForm.valid) {
      this.tweetForm.value.userName = this.userService.userData.firstName + " " + this.userService.userData.firstName;
      this.tweetService.addTweet(this.tweetForm.value).subscribe(
        res => { },
        err => console.log(err),
        () => {
          this.tweetEmitter.emit(this.tweetForm.value);
          this.tweetForm.reset();
        }
      )
    }
  }
}
