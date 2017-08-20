import { Injectable } from '@angular/core';
import {Auth, User} from "../domain/entries";
import {Http} from "@angular/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Rx";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class AuthService {
  auth: Auth = {hasError: true, redirectUrl: '', errMsg: 'not logged in',user:null};
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  constructor(private http: Http,private userService: UserService) {
    let oldAuth = JSON.parse(localStorage.getItem('auth'));
    if(oldAuth){
      this.subject.next(oldAuth);
    }else{
      this.subject.next(this.auth);
    }

  }

  getAuth(): Observable<Auth>{
    return this.subject.asObservable();
  }

  unAuth():void{
    this.auth = Object.assign({},this.auth, {user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in'});
  }

  loginWithCredentials(username: string, password: string): Observable<Auth> {
    return this.userService.findUser(username)
      .map(user => {
        let auth = new Auth();
        if(user === null){
          auth.hasError = true;
          auth.errMsg = '用户不存在';
        }else if(user.password === password){
          auth.user = user;
          auth.hasError = false;
        }else {
          auth.hasError = true;
          auth.errMsg = '密码错误';
        }
        this.auth = Object.assign({},auth);
        this.subject.next(this.auth);
        return this.auth;
      })
  }
  register(username: string, password: string): Observable<User>{
    let toAddUser = {
      username: username,
      password: password
    };
    return this.userService
      .findUser(username)
      .switchMap(user => {
        if(user !== null) {
              return null
        }else {
          return this.userService.addUser(toAddUser).map(u => u);
        }
      })
  }
}
