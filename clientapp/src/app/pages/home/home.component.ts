import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginsSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  onGetStartedClick(){
    this.loginsSheet.open(AuthenticatorComponent);
  }
}
