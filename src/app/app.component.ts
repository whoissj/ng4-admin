import { Component } from '@angular/core';
import {AuthService} from "./core/auth.service";
import {Router} from "@angular/router";
import {Auth} from "./domain/entries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auth: Auth;
  title = 'app works!';
  constructor(private authService: AuthService, private router: Router){
  }
  ngOnInit() {
    this.authService
      .getAuth()
      .subscribe(auth => {
        return this.auth = Object.assign({}, auth);
      });
  }
}
