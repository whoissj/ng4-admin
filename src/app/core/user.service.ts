import { Injectable } from '@angular/core';

import { User } from '../domain/entries';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {

  private api_url: string = 'http://localhost:3000/users';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getUser(userId: number):Observable<User>{
    const url = `${this.api_url}/${userId}`;
    return this.http.get(url)
      .map(res => res.json() as User);
  }

  findUser(userName: string): Observable<User>{
    const url: string = `${this.api_url}/?username=${userName}`;
    return this.http.get(url)
      .map(res =>{
        let users = res.json() as User[];
        return (users.length>0)?users[0]:null;
      })
  }

  addUser(user: User): Observable<User> {
    return this.http.post(this.api_url,JSON.stringify(user),{headers: this.headers})
      .map(res => res.json() as User);
  }
}
