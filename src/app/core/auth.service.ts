import { Injectable } from '@angular/core';
import {Auth, Status, User} from "../domain/entries";
import {Http, Headers} from "@angular/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Rx";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  auth: Auth = {hasError: true, redirectUrl: '', errMsg: 'not logged in',user:null};
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);
  status:Status = {isLoading:false,msg:' '};
  statusSubject: Subject<Status> = new BehaviorSubject<Status>(this.status);
  private headers = new Headers({'Content-Type': 'application/json'});
  private API_URL = environment.apiUrl;
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

  loginWithCredentials(username: string, password: string): Observable<any> {
    this.changeStatus(true,'登 录 中 ...');
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
        this.changeStatus(false,'登 录');
        return this.auth;
      })

  }
  register(username: string, password: string): Observable<User>{
    this.changeStatus(true,'注 册 中 ...');
    let toAddUser = {
      username: username,
      password: password
    };
    return this.userService
      .findUser(username)
      .switchMap(user => {
        this.changeStatus(true,'注 册');
        if(user !== null) {
          return Observable.throw({mes:'用户已存在'});
        }else {
          return this.userService.addUser(toAddUser).map(u => u);
        }
      })
  }
  changePsd(username: string, password: string, newpsd: string): Observable<User> {
    return this.userService.findUser(username)
      .switchMap(user => {
        if(user.password === password) {
          let url = `${this.API_URL}/users/${user.id}`;
          return this.http.patch(url,JSON.stringify({password:newpsd}),{headers: this.headers})
            .map(res => {
              return res.json();
            })
        }else{
           return Observable.throw({mes:'wrong'});
        }
      })
  }
  changeStatus(isLoading: boolean,msg: string): void{
    this.status = Object.assign({},{isLoading:isLoading,msg:msg});
    this.statusSubject.next(this.status);
  }
  getStatus(): Observable<Status>{
    return this.statusSubject.asObservable();
  }
}
