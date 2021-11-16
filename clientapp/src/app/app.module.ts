import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { HomeComponent } from './pages/user/home/home.component';
import { AddtweetComponent } from './pages/tweet/addtweet/addtweet.component';
import { FollowingComponent } from './pages/user/following/following.component';
import { FollowersComponent } from './pages/user/followers/followers.component';
import { UserService } from './providers/services/user.service';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { ExploreComponent } from './pages/user/explore/explore.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    AddtweetComponent,
    FollowingComponent,
    FollowersComponent,
    ExploreComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,MatCardModule,MatTabsModule,MatInputModule
  ],
  providers: [UserService, {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
