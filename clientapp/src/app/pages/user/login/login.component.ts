import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(
        res => {
          localStorage.setItem('token', res.data.token);
          this.userService.userData = res.data.user;
          console.log(res);
        },err=>{
          console.log(err);
        },()=>{
          this.router.navigate(['/user/home']);
          this.userService.isLoggedIn = true;
        }
      )
    }
  }

}
