import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errLog: string ="";
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value).subscribe(res =>{
        console.log(res);
      },
      err => this.errLog = err.error.data,
      () =>{
        this.router.navigate(['/user/login']);
      }
      );
    }
  }

}
