import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token'))
      this.loadUser();
  }

  logout() {
    this.userService.logout().subscribe(
      res => { },
      err => { },
      () => {
        localStorage.removeItem('token');
        this.userService.isLoggedIn = false;
        this.userService.userData = null;
        this.router.navigate(['/user/login']);
      }
    )
  }

  loadUser() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userService.isLoggedIn = true;
        this.userService.userData = res.data;
      }, err => { console.log(err); },
      () => {}
    )
  }

}
