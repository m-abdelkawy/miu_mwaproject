import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.userService.getUserProfile().subscribe(res => this.profile = res.data);
  }

}
