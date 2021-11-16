import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appComponent';
  email: string | any;
  password: string | any;
  rname: string | any;
  remail: string | any;
  rcpassword: string | any;

  constructor(private snackBar: MatSnackBar) {

  }
  register() {

  }
  login() {
    if (this.email == "admin" && this.password == "admin") {
      this.snackBar.open('Login Successful', '', { duration: 1000 })
    } else {
      this.snackBar.open('Login error', '', { duration: 1000 })
    }
  }
}