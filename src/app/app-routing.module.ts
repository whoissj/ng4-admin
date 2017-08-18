import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'main',
    redirectTo:'main'
  },
  {
    path:'todo',
    redirectTo: 'todo/ALL'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
