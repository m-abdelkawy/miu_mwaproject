import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowersComponent } from './pages/user/followers/followers.component';
import { FollowingComponent } from './pages/user/following/following.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoggedGuard } from './providers/guards/logged.guard';
import { NotloggedGuard } from './providers/guards/notlogged.guard';

const routes: Routes = [
  {path: 'user', children:[
    {path: 'register', component: RegisterComponent, canActivate:[LoggedGuard]},
    {path: 'login', component: LoginComponent, canActivate:[LoggedGuard]},
    {path: 'home', component: HomeComponent, canActivate:[NotloggedGuard]},
    {path: 'following', component: FollowingComponent, canActivate:[NotloggedGuard]},
    {path: 'followers', component: FollowersComponent, canActivate:[NotloggedGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
