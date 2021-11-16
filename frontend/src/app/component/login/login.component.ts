import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    login: any=FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private commserv: CommonService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['', Validators.required],
      password:['', Validators.required]
    })
    this.commserv.getUser().subsribe((data:any) => {
      console.log(data)
    })

  }
  loginSubmit(data:any){
    console.log(data);

  }
  goToSignUp(){
    this.router.navigate(['register']);
  }

}
